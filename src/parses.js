import yaml from 'js-yaml';

const parseFile = (filePath, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(filePath);
    case '.yaml':
      return yaml.load(filePath);
    case '.yml':
      return yaml.load(filePath);
    default:
      throw new Error(`Incorrect format: '${format}'`);
  }
};

export default parseFile;
