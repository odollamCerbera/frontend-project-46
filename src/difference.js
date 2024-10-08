import _ from 'lodash';

function buildDiffTree(data1, data2) {
  const keysData1 = _.sortBy(Object.keys(data1));
  const keysData2 = _.sortBy(Object.keys(data2));
  const unionKeys = _.union(keysData1, keysData2);

  const diffTree = unionKeys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        type: 'nested',
        children: buildDiffTree(data1[key], data2[key]),
      };
    }
    if (!Object.hasOwn(data1, key)) {
      return {
        key,
        type: 'added',
        value: data2[key],
      };
    }
    if (!Object.hasOwn(data2, key)) {
      return {
        key,
        type: 'removed',
        value: data1[key],
      };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'unchanged',
        value: data1[key],
      };
    }
    return {
      key,
      type: 'changed',
      value1: data1[key],
      value2: data2[key],
    };
  });

  return diffTree;
}

export default buildDiffTree;
