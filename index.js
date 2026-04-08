const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();

// ESTA LÍNEA ES CLAVE: Render a veces necesita que forcemos el parsing de JSON
server.use(jsonServer.bodyParser); 

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`JSON Server está listo en el puerto ${port}`);
});