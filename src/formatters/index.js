import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const defineFormatter = (difference, format = 'stylish') => {
  switch (format) {
    case 'json':
      return json(difference);
    case 'plain':
      return plain(difference).trim();
    case 'stylish':
      return stylish(difference);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};

export default defineFormatter;
