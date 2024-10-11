import _ from 'lodash';

const getValue = (value) => {
  if (_.isPlainObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;

  return value;
};

const stringify = (node, parent = '') => {
  switch (node.type) {
    case 'nested':
      return node.children.map((item) => stringify(item, `${parent}${node.key}.`))
        .filter((value) => value !== null).join('\n');
    case 'added':
      return `Property '${parent}${node.key}' was added with value: ${getValue(node.value)}`;
    case 'removed':
      return `Property '${parent}${node.key}' was removed`;
    case 'unchanged':
      return null;
    case 'changed':
      return `Property '${parent}${node.key}' was updated. From ${getValue(node.value1)} to ${getValue(node.value2)}`;
    default:
      throw new Error(`Incorrect type: ${node.type}.`);
  }
};

const plain = (difference) => {
  return difference.map((node) => stringify(node))
    .filter((result) => result !== null).join('\n');
};

export default plain;
