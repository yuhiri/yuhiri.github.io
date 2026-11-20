#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
cd "$SCRIPT_DIR"

exec 9>.git-pull.lock
flock 9

if ! git gc; then
  echo "git gc failed" >&2
  exit 1
fi

if ! git pull --ff-only origin main; then
  echo "git pull failed" >&2
  exit 1
fi
