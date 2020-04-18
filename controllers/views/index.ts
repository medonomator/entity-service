import * as Vision from 'vision';
import * as Hapi from 'hapi';
import Boom from 'boom';
import { logger } from '../../helpers/logger';
import Entitys from '../../models/redis/entitys';

export const getMainPage = async (req, h: Vision<Hapi.ResponseToolkit>) => {
  try {
    const entitysData = await Entitys.getAll();
    return h.view('index', { entitysData });
  } catch (err) {
    logger.error(err);
    return Boom.badImplementation(err.message);
  }
};
