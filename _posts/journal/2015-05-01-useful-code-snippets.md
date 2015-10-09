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

## Update gh-pages with master
* `git checkout gh-pages`
* `git merge master`
* `git push origin gh-pages`

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

## Remove node_modules
* add 'node_modules' to .gitignore file
* `git rm -r --cached node_modules`
* `git commit -m 'Remove the now ignored directory node_modules'`
* `git push origin master`

## Roll back to previous commit 
`git revert --no-commit 544993f8416a6e8a0cde66f7ea28379f9ebf446c .HEAD`

This will revert everything from the HEAD back to the commit hash. (The --no-commit flag lets git revert all the commits at once, instead of littering history with messages for each commit in the range.)

to discard all the changes, and get a clean working tree:
* `git reset --hard HEAD`
* `git revert --continue`

## See history of commits
`git log`

## See remote branches 
`git remote show origin`

## Update gh-pages branch with master
`git push origin master:gh-pages`

## New gh-pages branch and publish 
* `git checkout -b gh-pages`
* `git push origin gh-pages`

## Keep gh-pages up to date with a master branch
* `git add .`
* `git status` // to see what changes are going to be commited
* `git commit -m` 'Some descriptive commit message'
* `git push origin master`
* `git checkout gh-pages` // go to the gh-pages branch
* `git rebase master` // bring gh-pages up to date with master
* `git push origin gh-pages` // commit the changes
* `git checkout master` // return to the master branch

## Kill processes
* `$ top`
* `$ kill -9 PID, e.g. $ kill -9 93799`

## Start a webserver - cd into directory and: 
* `python -m SimpleHTTPServer 8888 &` // Go to http://localhost:8888/
* `python3 -m http.server` // For Python 3: 

## Open bash profile in textedit
1. `touch ~/.bash_profile; open ~/.bash_profile`
2. `source ~/.bash_profile`

## See what’s on the path
`echo $PATH`

## Copy gem sets 
rvm allows you to have many different installations of ruby. You can copy gem sets across

* `rvm gem set copy old new`
* `rvm gem set copy 2.0.0-p353 2.1.3`

## Ruby versions and sudo 
* `rvm list`
* `rvm use RUBY-VERSION`
* `rvm gemset list`
* `gem install GEM --no-document`

## Homebrew
* `brew info <package>`
* `brew switch node 0.12.7_1`
* `brew switch node 4.1.1`

## Homebrew permissions
* `sudo chown -R $(whoami) /usr/local`

## Python versions using pyenv
[Reference](http://jespertoftkristensen.com/JTK/Blog/Entries/2014/10/27_Full_control_of_your_Python_and_Development_Environment.html)

* `pyenv install 2.7.7`
* `pyenv versions`
* `pyenv global 2.7.7`
* `pyenv local 3.4.0`
* `pyenv virtualenvs`
* `pyenv virtualenv 2.7.7 my_project`
* `pyenv activate my_project`
* `pyenv deactivate`
* `pyenv shell Cellar` - sets to Homebrew Python
*  Use `pyenv shell system` when installing something relating to python via brew

## Python checks
* `python-config --prefix`
* `which python`
* `pyenv which python`
* `brew --prefix`
* `echo $PYTHONPATH`

## Python and Homebrew 
* Only brew install while pyenv global is set to system and never brew while in a virtual environment. `pyenv global system` [Reference](http://amaral-lab.org/blog/troubleshooting-pyenv)
* To fix brew doctor issue try `echo 'alias brew="env PATH=${PATH//$(pyenv root)\/shims:/} brew"' >> .bash_profile` or `echo 'alias brew="env PATH=${PATH/\/Users\/roberto\/\.pyenv\/shims:/} brew"' >> .bash_profile`

## Use pyenv and virtualenv
Virtualenv lets you create isolated Python environments where you can pin down versions of site-packages specific to a particular project.
$ pip install virtualenv
$ pyenv install 2.7.2
$ pyenv shell 2.7.2
$ virtualenv `which python` foo
$ source foo/bin/activate    
$ pip install pandas
$ pip install numpy

## Get rid of new mail (bouncebacks) in Terminal
* `mail`
* `delete delete 1-` where  is the number of messages
* `q`

## List globally installed NPM packages and version
* “global installs are for command-line applications. Local installs are for things you require().”
* `npm list -g --depth=0`
* On [npm and homebrew](https://gist.github.com/DanHerbert/9520689)

## Smart quotes
* ‘Single opening - alt + ]’ 
* ‘Single closing & apostrophe - alt + shift + ]’ 
* ‘Double opening - alt + [’ 
* ‘Double closing - alt + shift + [’ 
* See [Smart Quotes](http://smartquotesforsmartpeople.com/) for details. 

## Merging topojson
When combining two or more files, you can specify the properties to keep:
* ’topojson -o select.json -p sov0name,name -- subunits.json places.json’ 