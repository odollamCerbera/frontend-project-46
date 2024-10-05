import _ from 'lodash';

const buildDifferenceTree = (dataFile1, dataFile2) => {
  const keysDataFile1 = _.sortBy(Object.keys(dataFile1));
  const keysDataFile2 = _.sortBy(Object.keys(dataFile2));
  const unionKeys = _.union(keysDataFile1, keysDataFile2);

  const differenceTree = unionKeys.map((key) => {
    if (_.isPlainObject(dataFile1[key]) && _.isPlainObject(dataFile2[key])) {
      return {
        key,
        type: 'nested',
        children: buildDifferenceTree(dataFile1[key], dataFile2[key]),
      };
    }
    if (!Object.hasOwn(dataFile1, key)) {
      return {
        key,
        type: 'added',
        value: dataFile2[key],
      };
    }
    if (!Object.hasOwn(dataFile2, key)) {
      return {
        key,
        type: 'removed',
        value: dataFile1[key],
      };
    }
    if (_.isEqual(dataFile1[key], dataFile2[key])) {
      return {
        key,
        type: 'unchanged',
        value: dataFile1[key],
      };
    }
    return {
      key,
      type: 'changed',
      value1: dataFile1[key],
      value2: dataFile2[key],
    };
  });

  return differenceTree;
};

export default buildDifferenceTree;
