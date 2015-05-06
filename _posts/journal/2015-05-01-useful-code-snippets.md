---
author: roberto
comments: false
date: 2015-05-01 16:34:33
layout: post
slug: code-snippets
title: 'Useful code snippets'
categories:
- Journal
tags:
- javascript
---

I'm going to use this post to keep all the useful things about Git in particular but other things as well. [JavaScript snippets are in another post](/journal/javascript-snippets).

## Add new remote repository
`git remote add origin <remote repository URL>`

## Create a new branch to work in
`git checkout -b <branchname>`

## Merge branch back in
* `git checkout master`
* `git pull origin master`
* `git merge <branchname> --no-ff`
* `git push origin master`

## Create Github page branch
* `git checkout -b gh-pages`
* `git commit -m "First commit to gh-pages branch"`
* `git push origin gh-pages`

## Discard unstaged changes  
* `git clean -df`
* `git checkout -- .`

## Remove files from the repository based on your .gitignore without deleting them from the local file system
`git rm --cached 'git ls-files -i -X .gitignore'`

## Remove file/folder from Git repository without deleting it from the local filesystem
* `git rm --cached mylogfile.log`
* `git rm --cached -r mydirectory`
* `git rm --cached -r platforms`
* `git rm -r --cached some-directory`

## Roll back to previous commit 
`git revert --no-commit d657a48842e4c14b19fd579bf8fb5ea2e713e846..HEAD`

This will revert everything from the HEAD back to the commit hash. (The --no-commit flag lets git revert all the commits at once, instead of littering history with messages for each commit in the range.)

`git revert --continue`

## See history of commits
`git log`

## See remote branches 
`git remote show origin`

## Update gh-pages branch with master
`git push origin master:gh-pages`

## New gh-pages branch and publish 
* `git checkout -b gh-pages`
* `git push origin gh-pages`

## Kill processes
* `$ top`
* `$ kill -9 PID, e.g. $ kill -9 93799`

## Start a webserver - cd into directory and: 
* `python -m SimpleHTTPServer 8888 &`

Go to http://localhost:8888/

## Open bash profile in textedit
1. `touch ~/.bash_profile; open ~/.bash_profile`
2. `source ~/.bash_profile`

## See what’s on the path
`echo $PATH`

## Copy gem sets 
rvm allows you to have many different installations of ruby. You can copy gem sets across

* `rvm gem set copy old new`
* `rvm gem set copy 2.0.0-p353 2.1.3`

## Python versions using pyenv
http://jespertoftkristensen.com/JTK/Blog/Entries/2014/10/27_Full_control_of_your_Python_and_Development_Environment.html

* `pyenv install 2.7.7`
* `pyenv versions`
* `pyenv global 2.7.7`
* `pyenv local 3.4.0`
* `pyenv virtualenvs`
* `pyenv virtualenv 2.7.7 my_project`
* `pyenv activate my_project`
* `pyenv deactivate`