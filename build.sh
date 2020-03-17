#!/bin/bash

set -e

pushd ui
  npm run-script build
popd

statik -src=ui/dist/ui

go build -o kpack-viz main.go