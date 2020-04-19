import * as Vision from 'vision';
import * as Hapi from 'hapi';
import Boom from 'boom';
import { logger } from '../../helpers/logger';
import Entitys from '../../models/redis/entitys';

export const getMainPage = async (req, h: Vision<Hapi.ResponseToolkit>) => {
  try {
    const entitysData = await Entitys.getAll();
    const composeValuesByColumn = {};
    const arrayFill = Array(20).fill(0);

    arrayFill.forEach((_, index) => {
      composeValuesByColumn[index] = [];
    });

    Object.keys(entitysData).forEach((entitys) => {
      Object.keys(entitysData[entitys]).forEach((parameter, idx) => {
        const value = entitysData[entitys][parameter];
        composeValuesByColumn[idx] = composeValuesByColumn[idx].concat(value);
      });
    });

    return h.view('index', {
      entitysData,
      composeValuesByColumn: JSON.stringify(composeValuesByColumn),
    });
  } catch (err) {
    logger.error(err);
    return Boom.badImplementation(err.message);
  }
};
