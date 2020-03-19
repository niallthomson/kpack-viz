# node stage
FROM node:12.7-alpine AS node-env
ADD ./ui /app
WORKDIR /app
RUN npm install
RUN npm run build && cp -R dist/ui /tmp

# go stage
FROM golang:alpine AS go-env
RUN apk --no-cache add build-base git bzr mercurial gcc && \
    go get github.com/rakyll/statik
ADD . /app
WORKDIR /app 
COPY --from=node-env /tmp/ui /tmp/ui
RUN statik -src=/tmp/ui && go build -o main .

# final artifact
FROM alpine:latest
WORKDIR /app
EXPOSE 8080
COPY --from=go-env /app/main /app/main
CMD ["./main"]