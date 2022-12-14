#  Videogames Database (Push-based Architecture) 

This project's UI was inspired by [this app](https://github.com/bobangajicsm/ng-video-games-db).

I started from the existing UI (and the RAWG API) as a starting point to then _refactor its architecture from a pull-based to a push-based approach_.

![image](https://user-images.githubusercontent.com/45793869/205876101-0b70def2-86de-4130-848a-89c139b1c990.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Getting Started Locally

- Obtain an API Key from https://rawg.io/apidocs
- copy `src/environments/environment.ts` into a new file `src/environments/environment.dev.ts` and add the API Key

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

