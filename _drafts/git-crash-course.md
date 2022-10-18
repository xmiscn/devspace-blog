---
title: 'Git Crash Course by Traversy Media'
date: 'October 10, 2022'
excerpt: 'Introduction into Git and Github including key management'
cover_image: '/images/posts/pankaj-patel-ZV_64LdGoao-unsplash.jpg'
category: 'Git'
author: 'Michael Sell'
author_image: 'https://randomuser.me/api/portraits/men/42.jpg'
---

# Git Crash Course

## Git commands introduction

git init - Initialize local git repository
git add <file> - Add a file to index, prepare for committing
git status - Check status of working tree
git commit
git push - Pushes the local directory to the remote repository
git pull - Pull the latest from remote repository
git clone - Clone a repository into a new directory

```bash
git --version
git init
git config --global user.name 'Michael Sell'
git config --global user.email 'michael.sell@usa.net'

git add index.html
git status

git rm --cached index.html
git status

git add .
git commit -m "Initial commit"
git status
```

## Git Ignore

Allows to ignore files once they are included in the list of .gitignore

## Branches

Allows to work on a feature without touching the main source.

```bash
git branch login - Create a branch login
git status
git checkout login - Switch into the branch login

git add .
git commit -m 'finished login'

git checkout master -Master branch is still without changes
git merge login
```

## Remote Repositories

Working with Github, the following order applies:

1. Create new repository
2. Add this repository as a remote repository

```bash
git remote - Check if already remote directory exists
git remote add origin https://github.com/xmiscn/repository - Deklare a remote repository with the name of origin
git push -u origin master



```
