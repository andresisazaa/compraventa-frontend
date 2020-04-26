// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendUrl: 'https://compraventa-backend.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyB4KqHPy-QVqUkOXj-n53gIuZt0cZxEyac',
    authDomain: 'proyecto-ing-web.firebaseapp.com',
    databaseURL: 'https://proyecto-ing-web.firebaseio.com',
    projectId: 'proyecto-ing-web',
    storageBucket: 'proyecto-ing-web.appspot.com',
    messagingSenderId: '542998837968',
    appId: '1:542998837968:web:e1d57fc308210f3214bcd5',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
