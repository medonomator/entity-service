import * as Joi from 'joi';

import { entitysValidate } from './validate/entitysValidate';
import { updateEntitys } from '../controllers/entitys/update';
import { getEntity } from '../controllers/entitys/get';
import { getEntitys } from '../controllers/entitys/getAll';

const entityRoutes = [
  {
    method: 'PUT',
    path: '/entitys',
    handler: updateEntitys,
    options: {
      validate: {
        payload: entitysValidate,
      },
    },
  },
  {
    method: 'GET',
    path: '/entitys/{entity}',
    handler: getEntity,
    options: {
      validate: {
        params: {
          entity: Joi.string().trim(),
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/entitys/getAll',
    handler: getEntitys,
  },
];

export default entityRoutes;
