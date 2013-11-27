Beautiful Wikia
===============

*This is a project for Wikia's winter 2013 Hackathon*

1. [Installation](#installation)
2. [Overview](#overview)
3. [Engineering Tasks](#engineering-tasks)
4. [Design Tasks](#design-tasks)
4. [Project Management](#project-management)

## Installation
* `git clone git@github.com:kenkouot/beautiful-wikia.git`
* Install Node.js
* `npm install` *(it will ask you for your sudo password to install global modules)*
* For sass compilation `gem install sass`
* *Optional:* For CLI grunt tool `npm install -g grunt-cli`

## Overview
Overall, this app is a simple concept. We want to distill the Wikia article experience, showing the parts that users really care about. This projects aims to reduce the complexity of the reading experience and bring it up to parity with modern expectations of design and development.

At a high level, this app will use/modify **MediaWiki's Parsoid** to retrieve sanitized and semantic markup and deliver it through **SailsJS** RESTful backend to our clientside `AngularJS` app. We will use **SCSS** for our styling, organized in [SMACSS](http://smacss.com/) style.

## Project Management
For now, we will use [Github Issues](https://github.com/kenkouot/beautiful-wikia/issues) for issues tracking and task assignment.

**A note on GitHub issue labels:**
* I've added labels for "Engineering" and "Design".
* I've also added a "requirement" to differentiate from required dev and bugs & improvements.
* Finally, I've added a "collaborate!" label, to signify that although a certain task is assigned to one person, that it can be considered a collaborate task and the assignee is simply the owner.
