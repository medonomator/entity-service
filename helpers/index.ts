import * as CONFIG from '../config';
import { IEntity } from '../interfaces/entity';
import * as uuid from 'uuid';

export const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const getRandomEntitys = (): IEntity => {
  const composeEntity = {};

  CONFIG.entitysNames.forEach(() => {
    const randomCountEntity = Math.round(getRandomNumber(0, 19));
    const randomEntity = CONFIG.entitysNames[randomCountEntity];
    composeEntity[randomEntity] = {
      id: uuid.v4(),
    };

    CONFIG.parameterNames.forEach(() => {
      const randomCountParameter = Math.round(getRandomNumber(0, 19));
      const randomParameter = CONFIG.parameterNames[randomCountParameter];
      const randomNumber = getRandomNumber(-1, 1).toString().slice(0, 6);
      composeEntity[randomEntity][randomParameter] = randomNumber;
    });
  });

  return composeEntity;
};
