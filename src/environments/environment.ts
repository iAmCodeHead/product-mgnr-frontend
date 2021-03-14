// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:3000',
    firebase : {
    apiKey: "AIzaSyD0tw3e3q8CD4nQZUp8CW6OtBiDnr_3vAE",
    authDomain: "product-mgt-system.firebaseapp.com",
    projectId: "product-mgt-system",
    storageBucket: "product-mgt-system.appspot.com",
    messagingSenderId: "1051370177709",
    // appId: "1:1051370177709:web:615a4c2d2bf7ddac59f224"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
