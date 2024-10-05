import path from 'path';
import fs from 'fs';
import parseFile from './parse.js';
import buildDifferenceTree from './difference.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');
const getformatFile = (filePath) => path.extname(filePath);

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fullFilePath1 = getFullPath(filePath1);
  const fullFilePath2 = getFullPath(filePath2);

  const contentFile1 = readFile(fullFilePath1);
  const contentFile2 = readFile(fullFilePath2);

  const formatFile1 = getformatFile(filePath1);
  const formatFile2 = getformatFile(filePath2);

  const dataFile1 = parseFile(contentFile1, formatFile1);
  const dataFile2 = parseFile(contentFile2, formatFile2);

  const difference = buildDifferenceTree(dataFile1, dataFile2);
  return difference;

  // Возвращает графическое изображение разницы в заданном формате
  // В директории formatters описать логику функции + создать там же для каждого формата своё представление
  // return defineFormatter(difference, format);
};

export default genDiff;
