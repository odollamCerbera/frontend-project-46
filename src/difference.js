import _ from 'lodash';

const getKeys = (dataFile1, dataFile2) => {
  const keysData1 = Object.keys(dataFile1);
  const keysData2 = Object.keys(dataFile2);
  const keys = _.union(keysData1, keysData2);
  return _.sortBy(keys);
};

const buildDiffTree = (data1, data2) => {
  const keys = getKeys(data1, data2);

  const diffTree = keys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: buildDiffTree(data1[key], data2[key]) };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, type: 'unchanged', value: data1[key] };
    }

    return {
      key,
      type: 'changed',
      value1: data1[key],
      value2: data2[key],
    };
  });

  return diffTree;
};

export default buildDiffTree;
