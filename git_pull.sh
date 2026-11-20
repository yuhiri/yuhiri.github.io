#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
REPO_DIR=$(find "$SCRIPT_DIR" -type d -name yuhiri.github.io -print -quit 2>/dev/null)

if [ -z "$REPO_DIR" ] || ! git -C "$REPO_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "fail: repository not found near $SCRIPT_DIR" >&2
  exit 1
fi

cd "$REPO_DIR"

exec 9>"$SCRIPT_DIR/.git-pull.lock"
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
