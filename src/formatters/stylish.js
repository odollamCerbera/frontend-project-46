import _ from 'lodash';

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) return `${data}`;

  const indentation = ' '.repeat(4 * depth);
  const indentShort4 = indentation.slice(0, -4);

  const currentTree = Object.entries(data);
  const nodes = currentTree.map(([key, value]) => `${indentation}${key}: ${stringify(value, depth + 1)}`);
  const result = nodes.join('\n');

  return `{\n${result}\n${indentShort4}}`;
};

const stylish = (difference) => {
  const iter = (currentTree, depth = 1) => {
    const indentation = ' '.repeat(4 * depth);
    const indentShort2 = indentation.slice(0, -2);
    const result = currentTree.map((node) => {
      switch (node.type) {
        case 'nested':
          return `${indentation}${node.key}: {\n${iter(node.children, depth + 1)}\n${indentation}}`;
        case 'added':
          return `${indentShort2}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'removed':
          return `${indentShort2}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'unchanged':
          return `${indentShort2}  ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'changed':
          return `${indentShort2}- ${node.key}: ${stringify(node.value1, depth + 1)}\n${indentShort2}+ ${node.key}: ${stringify(node.value2, depth + 1)}`;
        default:
          throw new Error(`Incorrect type: ${node.type}.`);
      }
    });

    return result.join('\n');
  };

  return `{\n${iter(difference)}\n}`;
};

export default stylish;
