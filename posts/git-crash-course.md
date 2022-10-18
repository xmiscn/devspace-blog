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
