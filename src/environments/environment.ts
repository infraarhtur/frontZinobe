import { cargarJSON } from '../app/function/utilidades';

const environmentConfig = cargarJSON('assets/environment-config.json');

const environment = {
  production: false,
  urlBaseServicio:"http://localhost:3000",
  montoBase:5000000000,
  montoMinimo:10000,
  montoMaximo:100000
};

// Asignación masiva de las propiedades del objeto environmentConfig a las propiedades del objeto environment
// Actualiza environment antes de exportar
Object.assign(environment, environmentConfig);
export { environment };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
