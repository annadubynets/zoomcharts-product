# Frontend Template #

This project provides css, js, fonts and images assets for Zoomcharts project.

# How to build the project #

## Prepare dev environment ##

The project requires nodejs 17. The best option to get it is using nodeenv.

**nodeenv** used to isolate the node versions on the system and can be installed on linux using the following command:

    pip3 install nodeenv

Create a virtualenv with the 17 nod version

    nodeenv -n 17.1.0 env

Active it 

    . env/bin/activate

## How to start the dev server for development? ##

    npm install
    npm run dev


## How to build the assets? ##

    npm run build

The command above will create a dist folder in the project trunk with the following structure:

    dist |
         |- js
         |- css
         |- fonts
         |- img
         |- *.html

The destination project should use js, css, fonts and img folders, but html is the markup example
