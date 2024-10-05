import path from 'path';
import fs from 'fs';
import parseFile from './parse.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const getformatFile = (filePath) => path.extname(filePath);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fullFilePath1 = getFullPath(filePath1);
  const fullFilePath2 = getFullPath(filePath2);

  const formatFile1 = getformatFile(filePath1);
  const formatFile2 = getformatFile(filePath2);

  const contentFile1 = readFile(fullFilePath1);
  const contentFile2 = readFile(fullFilePath2);

  const dataFile1 = parseFile(contentFile1, formatFile1);
  const dataFile2 = parseFile(contentFile2, formatFile2);
};

export default genDiff;
