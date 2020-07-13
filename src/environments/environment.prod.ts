import { cargarJSON } from '../app/function/utilidades';
const environmentConfig = cargarJSON('assets/environment-config.json');

const environment = {
  production: true,
  urlBaseServicio:"http://localhost:3000",
  montoBase:5000000000,
  montoMinimo:10000,
  montoMaximo:100000
};

// Asignación masiva de las propiedades del objeto environmentConfig a las propiedades del objeto environment
// Actualiza environment antes de exportar
Object.assign(environment, environmentConfig);
export { environment };

