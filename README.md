# PersonalDetails

Using D3 to create a scatter plot chart. On initial load, I'm reading in some seed data just to show an inititial rendering of the chart. When more details are added, the chart updates successfully, adding new plots and transitioning existing plots with new coordinates if necessary.

I'm initializing the store with some seed data to show that the chart properly builds and d3 properly associates position with data metrics.

At the end of the day, we need a working product so in the `ngx-charts-solution` I've used the `@swimlane/ngx-charts`, which uses D3, under-the-hood to build a graphical representation of the data. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
