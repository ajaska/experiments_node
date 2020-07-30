#!/bin/bash
set -euxo pipefail

../node_modules/.bin/ts-node-script ./index.ts $@
