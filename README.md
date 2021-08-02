# Celeb Calendar

## Project Structure

Angular projects should always follow a similar structure with regards to the use and importing of `modules`:

- **CoreModule**: Defines singletons and services. In here, place all services (e.g. API interactions using HttpClient), and _static_ (will never change regardless of app state) components/guards/models... This should only ever be imported by the AppModule (see below) and no where else. If you need to import the CoreModule elsewhere, you're doing something wrong.
- **SharedModule**: Imports and re-exports all modules used elsewhere, rather than importing/exporting the same modules into different modules. Feature modules (see below), should only be importing the SharedModule (and any routing module).
- **FeatureModules**: These should contain components specfic to that feature (e.g. an `accounts` feature could include the `register` and `login` components).
- **AppModule**: The entry point for Angular applications; imports the CoreModule.

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
