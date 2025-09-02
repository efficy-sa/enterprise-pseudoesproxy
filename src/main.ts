import express from 'express';
import http from 'http';

import './configuration/logger';
import { SERVER } from './configuration/env-vars';
import utils from './utils/common';
import routes from './routes/index';

let server: ReturnType<typeof http.createServer>;
export const app = express();

const main = () => {
  // basic server set-up
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(utils.loggerHandler);// allows to log incoming calls
  // set-up actual endpoints
  app.use(routes);
  // initialize server
  server = http.createServer(app);
  server.listen(SERVER.PORT, () => {
    logger.log(`Server listening on ${SERVER.HOSTNAME}:${SERVER.PORT}`);
  });
};
// allows to shut down application from an external service (such as jest for testing)
export const shutdown = (callback: any) => {
  server && server.close(callback);
};
// start-up application
main();
