phlip9.com
==========

My personal portfolio website.

### Setup ###

Install [nodejs](http://nodejs.org/)

Install the dependencies

    $ cd phlip9.com
    $ npm install
    $ npm install -g bower grunt-cli

Install the bower dependencies

    $ bower install

Run grunt to get the debug build up and runnning

    $ grunt


### Deploying ###

Make sure `.ftppass` is present in the root project directory and is of the form

    {
      "phlip9.com": {
        "username": "username1",
        "password": "password1"
      }
    }

Build the files and deploy

    $ grunt publish
    $ ./deploy.sh

