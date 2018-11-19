# EMIS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Setup Developer workspace / General instructions for development on server with git

1. Clone repository to your computer (git clone https://github.com/TheAeroHead/EMIS from git bash)
2. Navigate to /EMIS/src/app to view project files (.ts, .html, and .css files can be modified by most text editors, such as Notepad++)
3. After modifying a file, add file to staging using git cli (e.g. cd to project folder, git add ./src/app/app.component.ts)
4. Use git commit -m "Commit message here" to save modified code LOCALLY.
5. Use git pull to verify no new code has been added to repository (verify up to date)
6. If merge conflicts, check difference between files and resolve them.
7. Use git commit -amend -m "New commit amend message here" to save merge conflict corrections
8. Use git checkout -b [name of local branch here] to add new branch on local machine. 
9. Use git push origin [name of local branch] to push new branch created
10. View other branches using git branch. 

## Preview App

Logon to linux machines in lab and navigate to zergling10.cs.utsarr.net. Will be updated whenever ng build --prod is run on server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Login to linux machines and ssh into server. Run cd ./EMIS/EMIS. Run sudo git pull to update local files. 
In this directory, run ng build --prod to update the production files in /var/www/html/dist/EMIS 
(as specified in /etc/apache2/sites-available/000-default.conf DocumentRoot field)
Run `ng build` to build the project. The build artifacts will be stored in the `/var/www/html/dist/EMIS` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
