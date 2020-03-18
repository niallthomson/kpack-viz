package pkg

import (
	"fmt"

	"github.com/pivotal/kpack/pkg/apis/build/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	k8sclient "k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"

	"bytes"
	"io"
)

type readyContainer struct {
	podName       string
	containerName string
	namespace     string
}

func FetchLogs(image string, build string) (string, error) {
	config, err := clientcmd.NewNonInteractiveDeferredLoadingClientConfig(
		clientcmd.NewDefaultClientConfigLoadingRules(),
		&clientcmd.ConfigOverrides{}).ClientConfig()

	if err != nil {
		return "", err
	}

	// create the clientset
	clientset, err := k8sclient.NewForConfig(config)
	if err != nil {
		return "", err
	}

	listOptions := metav1.ListOptions{
		LabelSelector: labelSelector(image, build),
		Limit:         100,
	}

	podList, err := clientset.CoreV1().Pods("").List(listOptions)
	if err != nil {
		return "", err
	}

	str := ""

	if len(podList.Items) > 0 {
		pod := podList.Items[0]

		buf := new(bytes.Buffer)

		for _, c := range pod.Status.InitContainerStatuses {
			if c.State.Waiting == nil {
				err := fetchLogs(clientset, pod.Namespace, pod.Name, c.Name, buf)
				if err != nil {
					return "", err
				}
			}
		}

		/*for _, c := range pod.Status.ContainerStatuses {
			if c.State.Waiting == nil {
				readyContainers = append(readyContainers, readyContainer{
					podName:       pod.Name,
					containerName: c.Name,
					namespace:     pod.Namespace,
				})
			}
		}*/

		str = buf.String()
	}

	return str, nil
}

func fetchLogs(clientset *k8sclient.Clientset, namespace string, pod string, container string, buf *bytes.Buffer) error {
	req := clientset.CoreV1().Pods(namespace).GetLogs(pod, &corev1.PodLogOptions{
		Container: container,
	})

	podLogs, err := req.Stream()
	if err != nil {
		return err
	}
	defer podLogs.Close()

	_, err = io.Copy(buf, podLogs)
	if err != nil {
		return err
	}

	return nil
}

func labelSelector(image string, build string) string {
	if build == "" {
		return fmt.Sprintf("%s=%s", v1alpha1.ImageLabel, image)
	}

	return fmt.Sprintf("%s=%s,%s=%s", v1alpha1.ImageLabel, image, v1alpha1.BuildNumberLabel, build)
}
