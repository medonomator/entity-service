import request from 'request';
import { logger } from '../helpers/logger';
import { getRandomEntitys } from '../helpers';

const entitys = {
  entity1: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity2: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity3: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity4: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity5: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity6: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity7: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity8: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity9: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity10: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity11: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity12: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity13: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity14: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity15: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity16: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity17: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity18: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity19: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
  entity20: {
    parameter1: 1,
    parameter2: 1,
    parameter3: 1,
    parameter4: 1,
    parameter5: 1,
    parameter6: 1,
    parameter7: 1,
    parameter8: 1,
    parameter9: 1,
    parameter10: 1,
    parameter11: 1,
    parameter12: 1,
    parameter13: 1,
    parameter14: 1,
    parameter15: 1,
    parameter16: 1,
    parameter17: 1,
    parameter18: 1,
    parameter19: 1,
    parameter20: 1,
  },
};

// console.log('=============================');
// console.log('logging', getRandomNumber(-1, 1));
// console.log('=============================');

export const autoUpdateEntitysData = async () => {
  try {
    request(
      {
        url: 'http://localhost:5000/entitys',
        method: 'PUT',
        json: true,
        body: entitys,
      },
      function (err, res, body) {
        if (err) {
          logger.error(err);
        }
        console.log(body);
      },
    );
  } catch (error) {
    logger.error(error);
  }
};