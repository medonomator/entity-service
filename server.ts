import * as Hapi from 'hapi';
import * as Inert from 'inert';
import * as Vision from 'vision';
import { logger } from './helpers/logger';
import { autoUpdateEntitysData } from './helpers/autoUpdateEntitysData';
// Routes
import entityRoutes from './routes/entitys';
import viewsRoutes from './routes/views';

export class Server {
  constructor(private port: string) {}

  public async start() {
    try {
      const server: Hapi.Server & Vision = new Hapi.Server(<Hapi.ServerOptions>{
        port: this.port,
      });

      await server.register([Inert, Vision]);

      server.views({
        engines: {
          hbs: require('handlebars'),
        },
        relativeTo: __dirname,
        partialsPath: 'views/partials',
        isCached: true,
        path: 'views',
        context: {
          path: '../static/',
        },
      });

      server.route([...entityRoutes, ...viewsRoutes]);

      await autoUpdateEntitysData();

      await server.start();
      logger.info('Server running at:', server.info.uri);
    } catch (err) {
      logger.error(`Server start error: `, err.message, err.stack);
    }
  }
}

export const server = new Server(process.env.PORT || '5000');
server.start();

process.on('unhandledRejection', (error: Error) => {
  console.error(error.message);
  console.error(error.stack);
});

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
});
