#!/bin/bash
set -euxo pipefail

../node_modules/.bin/tsc --build tsconfig.json
