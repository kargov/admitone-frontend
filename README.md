# AdmitOne-Backend

Web application (the frontend part) that models the business of a fictional competitor to TicketMaster. The solution is based on [Angular Seed](https://github.com/angular/angular-seed)

## Architecture Diagram

![](https://raw.githubusercontent.com/kargov/admitone-docs/master/admitone-frontend.png)

## Technology Stack

* ANGULAR JS
* ANGULAR-MATERIAL
* ANGULAR-LOCAL-STORAGE
* NG-TABLE
* PROTRACTOR
* JASMINE
* NPM
* BOWER

### Install Dependencies

The project is prefigured with `npm` to automatically run `bower` so simply do:

```
npm install
```

The result will be

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

### Run the Application

The project is prefigured with a simple development web server. The simplest way to start
this server is:

```
npm start
```

### Running End-to-End Tests


The `admitone-fronend` app comes with end-to-end tests, written in Jasmine. These tests
are run with the Protractor End-to-End test runner.

* The configuration is found at `e2e-tests/protractor-conf.js`.
* The end-to-end tests are found in `e2e-tests/scenarios.js`.

**Before starting Protractor, open a separate terminal window and run:**

```
npm start
```

Once you have ensured that the development web server hosting our application is up and running, you
can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

## USERS

| Name                      | Password     |   Role
| --------------------------|:-------------|:------------:
| bob@me.com                | admin        | ROLE_ADMIN