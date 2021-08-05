# Celeb Calendar

This application is **unfinished**. This was created in order to build capability with Angular as we (at work) transition from a React-focused group to an Angular-focused group. This application seeks to act as somewhat of an example application for the Celebrity Calendar projects, and so its unfinished state provides a reference while still allowing others to fill in the blanks (plus, I was too lazy to finish this in my free time 😉).

The back-end for this application was written in Elixir using the Phoenix framework (see https://github.com/JDysiewicz/celeb-calendar-server). It is not expected that anyone re-create this or even use Elixir, and was used mostly for my own enjoyment. There are plenty of sample back-ends available if desired, mostly written in JavaScript/TypeScript using NodeJS' `express` package: just ask your tech lead/product owner/scrum master and they'll find them for you.

Another reason for the Elixir back-end is to help illustrate a point: _many language and frameworks accomplish the same thing_. Some are better than others at specific things, however it's important to try and be **language/framework-agnostic** in your approach to development. If you have a solid understanding of how one language works, you can pick up another pretty quickly (a few months or so, depending on familiarity with underlying concepts).

_That being said, everyone has their favourites: I'll always be a TypeScript/React guy at heart._

## Standard Angular Architecture

Angular projects should always follow a similar structure with regards to the use and importing of `modules`:

- **CoreModule**: Defines the plumbing, heating, and electricity of the app. In general, this refers to Services (`.service.ts` files) like HTTP calls, logging, and custom error handling. The `CoreModule` is also suitable for specific-application code (not applicable to other projects at all) which will only be used _once_ in the `AppModule` and no where else. This will usually be things like navbars, footers, and side-menus (this should only ever be used once, so the `SharedModule` is not suitable, and it is needed at the `AppModule` level).
- **SharedModule**: Defines components, directives, and pipes which are used in multiple components. It can also be used to import and re-export modules used in many `FeatureModules` (e.g. `CommonModule`, `ReactiveFormsModule`, etc) so you end up with cleaner imports on your modules (rather than importing each of those modules multiple times in different `FeatureModules`, you only have to import the `SharedModule` in each of them as the `SharedModule` will export `CommonModule`, `ReactiveFormsModule`...).\*
- **FeatureModules**: These should contain components specfic to that feature (e.g. an `accounts` feature could include the `register` and `login` components). Feature modules should import the `SharedModule` (but not the `CoreModule`!).
- **AppModule**: The entry point for Angular applications; imports the CoreModule and defines/delegates routing via lazy-loading.

\* - Note, even though the `SharedModule` may be imported multiple times, you won't end up with the same module twice causing uneccessary bloat to your app - Angular caches these for you so don't worry about it if you import the `SharedModule` in a `FeatureModule` but you only use one or two things from it.

This gives all Angular projects a similar dependency chain and overall architecture.

Folder structure should look something similar to:

```
src
|> app
    |> core
        |> components
        |> services
        |> utils
        ...
        |> core.module.ts
    |> features
          |> feature-a
                |> components
                |> feature-a.module.ts
                |> feature-a-routing.module.ts
          |> feature-b ....
    |> shared
          |> components
          |> layout
                |> header
                      |> header.component.{html|css|ts}
                |> footer
                |> ....
          |> shared.module.ts
    |> app-routing.module.ts
    |> app.component.{html|css|ts}
    |> app.module.ts
```

Note the exact folders created will depend so don't take this as gospel, however follow a similar style to this.

## Project Structure

This project uses a similar structure to the above (Core, Shared, App, Feature modules), however with a slight twist. What "is-or-is-not" a module is somewhat subjective, so this project splits it based on **pages** (i.e. URLs). This means we can take advantage of lazy-loading (as each module is locked behind a different URL, so we can be sure we're not loading modules unnecessarily), and also gives us a nice rule-of-thumb of when to create a new module ("does it create a new page?").

To lean into this further, this uses the main entry point for each module as a "page.ts|html|css" file (e.g. `home.page.ts|html|css`). While not strictly standard (as these `.page` files are really just `.component` files in disguise), I feel it makes the codebase easier to reason about. This also allows page-specific components (i.e. components that are there to break the page down rather than to be shared) to be placed into a `components` folder in each module.

Here is a brief breakdown of the folder strucutre/architecture of each module:

- **Core**: components that are rendered once (e.g. Navbar), HTTP services.
- **App**: Main entrypoint; uses the Navbar from core and main entrypoint for the router-outlet
- **Shared**: Pipes/components/directives/models used across the site, with some utilities built in which didn't have a home already
- **Types**: Not a module, however a `types` folder has been added for misc. TS types/interfaces. Having this at the level of the `shared`, `core`, and `features` folders allows us to access the `types` from any module without importing modules where we need not (e.g. importing `shared` into `core`).
- **Features**: Each feature module has a similar structure -
  - `components`: Holds page-specific components (e.g. calendar-header)
  - `feature-routing.module.ts`: Endpoints for the moduel
  - `feature.module.ts`: Module file; defines imports/exports/declarations
  - `feature.page.ts|html|css`: The main component loaded when hitting the main entrypoint for the module.

## Angular Conventions

There are a handful of conventions used in this project which are considered pretty standard:

- **Architecture**: see above
- **CSS library**: CSS libraries are pretty common to use in Angular; this application uses Bulma.
- **Global state**: The use of BehaviourSubjects to store global state is a pretty common thing in primitive Angular applications
- **Use of rxjs/observables**: Favouring rxjs solutions is the prefered way to handle asynchronous/callback-related tasks (e.g. http requests). This is a pretty deep topic, however, and is often considered the largest stumbling block when learning Angular.
- **Async pipe usage**: Storing observables in a `.component.ts` file _without subscribing_ to them is pretty common in Angular (these variables are often suffixed with a `$` to indicate they are an observable). This allows us to "unwrap" that observable in the `.component.html` file with use of the async pipe ` | async`. There are many benefits to this, most notably it handles the `unsubscribe` part of an observable meaning we don't have to worry about it and keep our code free of memory/performance-leaks.
- **Component composition**: Angular (like React) uses a "component-based" architecture, meaning we treat components as small lego bricks, and snap them together to build our application. This means we are often creating larger components our of smaller components (e.g. the `.page.ts` components are often comprised of many other components in the shared/components folder). This process of building larger components from smaller ones is called _component composition_.

## Testing

This application has NO tests. This is **bad**. Do not do this. Test your application code. `Protractor` is the default way to End-to-End (e2e) test Angular applications, however `Cypress` is also a great alternative (which Angular may be switching to by default in the coming months...).

- https://angular.io/guide/testing
- https://www.thinktecture.com/en/angular/e2e-tests-with-cypress-and-angular/
- https://www.youtube.com/watch?v=4XJwy0BI0VI
- https://indepth.dev/posts/1349/write-better-automated-tests-with-cypress-in-angular

Unit testing your "business logic" (the application code which does "stuff" like functions, methods, etc) is also important (and functionaly far simpler than e2e testing!). The default way to do this in Angular is with `Karma` and `Jasmine`.

- https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4
- https://www.digitalocean.com/community/tutorials/testing-angular-with-jasmine-and-karma-part-1
- https://www.youtube.com/watch?v=yG4FH60fhUE
- https://www.youtube.com/watch?v=lTKhB6uAmno

## TODO

Some misc. todos to give some direction while I was creating this, left here for the sake of posterity.

- Create login component and attempt to connect to backend **DONE**
- Attempt to register for account **DONE**
- When on calendar component connect to backend and get all celebs
- Create account type (can create celeb or fan account) **DONE**
  - Recheck requirements when creating celeb; requires more info, dynamically show this if user selected "celeb" from drop down **DONE**
- Create CelebService(?) which will take care of CRUD for celeb data **DONE**
- Create a LoginService(?) -> will be lots of info online about creating login solution **DONE**
- Create calendar page **DONE**
- Display celeb information in correct calendar slot
- Cycle through months; show month-by-month calendar : **DONE**
- Add a request feature for celebs and managers to send pairing requests
  - pairing_requests_table
  - id: ID manager_id: UID celeb_id: UID status: "accepted" | "declined" | "pending" sent_by: UID
  - Add a "Requests" page to celeb/manager dashboards which shows all requests with their UID in there (manager_id or celeb_id); if "sent_by" is them then add the status of the request, if "sent_by" is not their UID then add an "accept/decline" buttons which will add an entry to the "manager_celeb_link" table (id: ID celeb_id: UID manager_id: UID)
  - Include an ability to delete pairings (removes from "manager_celeb_link" but not from "pairing_requests_table").
