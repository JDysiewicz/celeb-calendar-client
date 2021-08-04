# Celeb Calendar

## Project Structure

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

## TODO

- Create login component and attempt to connect to backend
- Attempt to register for account
- When on calendar component connect to backend and get all celebs
- Create account type (can create celeb or fan account)
  - Recheck requirements when creating celeb; requires more info, dynamically show this if user selected "celeb" from drop down
- Create CelebService(?) which will take care of CRUD for celeb data
- Create a LoginService(?) -> will be lots of info online about creating login solution
- Create calendar page
- Display celeb information in correct calendar slot
- Cycle through months; show month-by-month calendar : **DONE**
- Add a request feature for celebs and managers to send pairing requests
  - pairing_requests_table
  - id: ID manager_id: UID celeb_id: UID status: "accepted" | "declined" | "pending" sent_by: UID
  - Add a "Requests" page to celeb/manager dashboards which shows all requests with their UID in there (manager_id or celeb_id); if "sent_by" is them then add the status of the request, if "sent_by" is not their UID then add an "accept/decline" buttons which will add an entry to the "manager_celeb_link" table (id: ID celeb_id: UID manager_id: UID)
  - Include an ability to delete pairings (removes from "manager_celeb_link" but not from "pairing_requests_table").
