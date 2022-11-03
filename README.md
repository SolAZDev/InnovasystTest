# InnovasystTest
An assesment from Innovasyst. 


### Deployment
https://solazdev.github.io/InnovasystTest
### Solutions
1. Form Validations
  * The Register and Login page features 2 forms, one for each. They are using FormBuilders and Validators to facilitate validating the forms.
2. API Integration
  * Implemented a Per-Page, rather than a service. 
  * The Registration form uses a POST to GoRest.co.in's user Creation endpoint, however, even with their example, it returns a `{"message":"Authentication failed"}`. So in the component, it is ignored, and redirects the user to the login form.
  * The Users Viewer page uses a GET from GoRest.co.in, where it obtains a list of users. It seems to auto-limit itself to 9.
    * The Users list is then displayed via a `mat-table` 
3. Hard Coded Loging
  * As I did not find a login for GoRest.co.in, I simplified this to a pre-set login, with disabled fields.





# Angular Starter


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
