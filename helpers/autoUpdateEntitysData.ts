import request from 'request';
import { logger } from '../helpers/logger';
import { getRandomEntitys } from '../helpers';

export const autoUpdateEntitysData = async () => {
  try {
    setInterval(() => {
      request(
        {
          url: 'http://localhost:5000/entitys',
          method: 'PUT',
          json: true,
          body: getRandomEntitys(),
        },
        function (err) {
          if (err) {
            logger.error(err);
          }
        },
      );
    }, 1000);
  } catch (error) {
    logger.error(error);
  }
};
