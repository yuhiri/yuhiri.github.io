#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
cd "$SCRIPT_DIR"

exec 9>.git-pull.lock
flock 9

if ! git gc; then
  echo "fail: git gc" >&2
  exit 1
fi

if ! git fetch --prune origin; then
  echo "fail: git fetch" >&2
  exit 1
fi

if ! git reset --hard origin/main; then
  echo "fail: git reset" >&2
  exit 1
fi

if ! git clean -fd; then
  echo "fail: git clean" >&2
  exit 1
fi
