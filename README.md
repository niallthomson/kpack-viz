# kpack-viz

![CI](https://github.com/niallthomson/kpack-viz/workflows/CI/badge.svg)

`kpack-viz` is an application for viewing the state of `kpack` running in your Kubernetes cluster.

High-level features include:
- Live dashboard of recent builds
- Image browser
- Build log viewer
- Bill of materials for each build
- Compare two builds to understand what changed

![screenshot](docs/screenshot.png)

The current limitations are:
- Detailed image information, such as the BOM, can only be read from Harbor
- Only builds/images still stored in the Kubernetes cluster can be viewed, as there is currently no persistence

## Usage

The tool can be run either locally or in the Kubernetes cluster where `kpack` is installed.

Pre-requisites:
- Kubernetes cluster
- `kpack` installed
- (Optional) Harbor registry

### Kubernetes

Currently the code makes the assumption that `kpack-viz` is installed in the same namespace as `kpack`.

The example manifests provided use `ytt`, `kbld` and `kapp` to build the full manifests and deploy the application. 
You must install these utilities first. If you do not wish to use these tools you will need to manually build the YAML files
from the examples provided in `./deploy`.

To deploy using the existing images hosted on Docker Hub:

```
./deploy.sh -v ingress.domain="<your domain>"
```

Where `<your domain>` is a fully qualified domain that will be used for the `Ingress` resource.

To build a new image locally and deploy (requires Docker locally):

```
./deploy.sh -v ingress.domain="<your domain>" -v image.destination="<your image>" -f deploy/optional/image.yml
```

Where `<your image>` is the full path to a repository and image. For example:
- To push to Docker Hub use something like `<your username>/<some image name>`. I use `nthomsonpivotal/kpackviz`.
- To push to something like Harbor use something like `<harbor domain>/<project>/<image>`.

### Local

Running locally is relatively straightforward. It has particular requirements above what was previously specified:
- You must have `kubectl` logged in to the cluster where `kpack` is installed, as it currently inherits that endpoint/credential information
- Golang 1.13
- `statik` >= 0.1.17
- `node` >= 12.X
- Angular >= 9.X

Build the application:

```
./build.sh
```

Then run it:

```
./kpack-viz
```

This will start the server on port `8080`, so access the following URL in your browser:

```
http://localhost:8080
```
