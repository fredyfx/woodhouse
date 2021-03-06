# Project Woodhouse
## Introduction
This project was created to address the issues with synchronizing work between individuals when working with resources that should preferably have only one person working with them at a time. For example when multiple people were working on end user documentations that is under source control, there would be times when work could be overwritten, merged incorrectly, etc. Another example is where two or more developers would work on the same area of code, once they are done with their work they would have to merge their changes and hope that the merge did not cause problems.

Synchronizing these resources would often lead to messaging or talking with one another to determine if a resource was occupied and by whom, messaging or talking again when the resource was freed, and so on. Rather than wasting time waiting on responses to check on resources, it was decided to create an app to better handle synchronizing between team members. Thus project Woodhouse was born out of this necessity and for the desire to play with different technologies outside of those used in the workplace.

## Project Status
### (This section will be updated as the project progresses)
Currently this is only an incomplete mockup.

## Developing and running the application
1. Use [Yarn](https://yarnpkg.com/) to get the dependencies with command `yarn`
2. Use the command `npm run build` to generate the build folder which contains the files for the applocation.
3. To run the application you can use an http server. You can run the commands `npm install -g http-server` and `http-server` to start an http server in the current directory.

Note: For development it is recommended to use [Cloud9 IDE](https://c9.io) or your choice of an ide on Linux. You can use Windows for development but the build command may or may not work.

## Features
### (Some not implemented yet but will be soon!)
* Able to define user accounts that allow viewing and managing of resources.
* Able to define resources that will only allow one person to occupy at any given time.
* Able to group resources for organization purposes.
* Users can reserve resources for a time period or manually manage when they are occupying a resource.
* Users can view which resources are occupied quickly using the dashboard.

## Trivia Facts
* The project was named after the butler in the TV series Archer as a poke at Jenkins.
* The project was originally named Buzzkillington after the character in Family Guy.