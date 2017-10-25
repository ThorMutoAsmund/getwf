# NGMeetup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Creating a directive

https://angular.io/guide/structural-directives

## Named outlets

http://onehungrymind.com/named-router-outlets-in-angular-2/

## Routes

https://blog.angular-university.io/angular2-router/

## Router authentication

https://medium.com/@ashu.singh212/angular-2-router-authentication-455840d87c06

## Cookie based authentication

https://stackoverflow.com/questions/17769011/how-does-cookie-based-authentication-work

## Sleep in promise

  sleeper(ms: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

        console.log("activate test...");
        new Promise(resolve => setTimeout(resolve, ms)).then(() =>
        {
            console.log("activate finished");
            
            resolve(true);
        })
    });
  }

## Firebase, authentication tutorial

https://progblog.io/Angular-2-Firebase-Tutorial-Part-1-Create-a-Firebase-3-CRUD-app-with-Angular-CLI/

## Firestore or Realtime Database

https://firebase.google.com/docs/firestore/rtdb-vs-firestore

## Firestore documentation

https://cloud.google.com/firestore/docs/query-data/get-data
https://blog.angular.io/improved-querying-and-offline-data-with-angularfirestore-dab8e20a4a06

## When to reject a promise

https://stackoverflow.com/questions/17293546/when-to-reject-resolve-a-promise
