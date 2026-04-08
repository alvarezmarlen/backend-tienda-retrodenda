const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json'); // Tu archivo de datos
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000; // Render asignará un puerto automático

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log('JSON Server está ejecutándose');
});