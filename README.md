Beautiful Wikia
===============

*This is a project for Wikia's winter 2013 Hackathon*

1. [Dependencies](#dependencies)
2. [Installation](#installation)
3. [Overview](#overview)
4. [Project Management](#project-management)

## Dependencies
* ruby, node.js, sass
	* Make sure node is at least at 0.10.22 if you are on OS X 10.8+ to avoid a bug with grunt-watch [*Source*](https://github.com/gruntjs/grunt-contrib-watch/issues/204)
* On a fresh Mac with [Homebrew](http://brew.sh/) installed:
 * `brew install node ruby`
 * `sudo gem install sass`
* *Optional:* For CLI grunt tool `npm install -g grunt-cli`
* Parsoid: (Required for getting articles!)
	* `git clone git@github.com:kenkouot/mediawiki-extensions-Parsoid.git`
	* `cd mediawiki-extensions-Parsoid/js && sudo npm install`
	* To run Parsoid, `node js/api/server.js` and Parsoid will run on localhost:8000

## Installation
* `git clone git@github.com:kenkouot/beautiful-wikia.git`
* `cd beautiful-wikia`
* `npm install` *(it will ask you for your sudo password to install global modules)*
* `bower install`
* Type `sails lift` in CLI to start application
* Visit [`localhost:1337`](http://localhost:1337) to view the app

## Overview
Overall, this app is a simple concept. We want to distill the Wikia article experience, showing the parts that users really care about. This projects aims to reduce the complexity of the reading experience and bring it up to parity with modern expectations of design and development.

At a high level, this app will use/modify **MediaWiki's Parsoid** to retrieve sanitized and semantic markup and deliver it through **SailsJS** RESTful backend to our clientside `AngularJS` app. We will use **SCSS** for our styling, organized in [SMACSS](http://smacss.com/) style.

## Project Management
For now, we will use [Github Issues](https://github.com/kenkouot/beautiful-wikia/issues) for issues tracking and task assignment.

**A note on GitHub issue labels:**
* I've added labels for "Engineering" and "Design".
* I've also added a "requirement" to differentiate from required dev and bugs & improvements.
* Finally, I've added a "collaborate!" label, to signify that although a certain task is assigned to one person, that it can be considered a collaborate task and the assignee is simply the owner.
