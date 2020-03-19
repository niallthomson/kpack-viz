#!/bin/bash

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

ytt -f $DIR/deploy/core $@ | kbld -f - | kapp -y deploy -a kpack-viz -f -