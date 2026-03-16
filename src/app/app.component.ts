import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';

  // 1-What is the purpose of the src/app/ folder?
// The src/app/ folder contains the main code of the Angular application. It includes components, services, modules, and other files used to build the app.

// 2-What does app.component.ts contain?
// app.component.ts contains the main component of the application. It controls the main view and connects the HTML template with the TypeScript logic.

// 3- What is the role of app.module.ts?
// app.module.ts is the main module of the Angular application. It declares components and imports other modules needed for the app to work.

// 4- Where would you add global CSS styles?
//Global CSS styles are added in the styles.css file inside the src folder.

// 5-What does angular.json control?
// angular.json controls the configuration of the Angular project, such as build settings, assets, styles, and scripts.
}
