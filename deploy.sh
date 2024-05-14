#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

pnpm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:g5l64jo3/react.git master:gh-pages

cd -