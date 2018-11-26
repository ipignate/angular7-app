
## Angular Material App

This repository contains the code of the [Angular Material App]

This Movie repository is updated to Angular v7, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.

![Angular Material App]

# Installation pre-requisites

IMPORTANT: Please use NPM 5 or above, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 

# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-material-app.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd angular-material-app
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the Movie.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)
