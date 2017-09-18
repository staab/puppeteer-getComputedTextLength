#!/bin/bash

uuid=$(uuidgen | awk '{print tolower($0)}')
name="svg-width-chrome-test-${uuid:0:8}"
heroku create $name --buildpack heroku/nodejs
heroku buildpacks:add https://github.com/mikeraimondi/heroku-buildpack-google-chrome
git push heroku master
