import { redisClient } from '../../database/redis';
import * as CONFIG from '../../config';
import { IEntity } from '../../interfaces/entity';
/**
 * Redis Entitys
 */
class Entitys {
  async set(entity: string, parameter: string, value: number) {
    const key = `${entity}:${parameter}`;
    await redisClient.set(key, value);
  }

  async get(entity: string): Promise<IEntity> {
    const composeEntity = {
      [entity]: {},
    };

    for await (const parameter of CONFIG.parameterNames) {
      const key = `${entity}:${parameter}`;
      const value = await redisClient.get(key);

      composeEntity[entity][parameter] = value;
    }

    return composeEntity;
  }

  async getAll(): Promise<IEntity> {
    const composeEntitys = {};

    for await (const entity of CONFIG.entitysNames) {
      composeEntitys[entity] = {};
      for await (const parameter of CONFIG.parameterNames) {
        const key = `${entity}:${parameter}`;
        const value = await redisClient.get(key);

        composeEntitys[entity][parameter] = value;
      }
    }
    return composeEntitys;
  }
}

export default new Entitys();
