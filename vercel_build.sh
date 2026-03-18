#!/bin/bash
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  echo "Main branch - building"
  exit 1
else
  echo "Non-main branch - skipping build"
  exit 0
fi   