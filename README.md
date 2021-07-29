# CelebCalendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# TODO

- Create login component and attempt to connect to backend
- Attempt to register for account
- When on calendar component connect to backend and get all celebs
- Create account type (can create celeb or fan account)
  - Recheck requirements when creating celeb; requires more info, dynamically show this if user selected "celeb" from drop down
- Create CelebService(?) which will take care of CRUD for celeb data
- Create a LoginService(?) -> will be lots of info online about creating login solution
- Create calendar page
- Display celeb information in correct calendar slot
- Cycle through months; show month-by-month calendar
