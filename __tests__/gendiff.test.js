import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const extentions = ['json', 'yaml', 'yml'];

test.each(extentions)('Comparing and formatting files in different extensions', (extention) => {
  const expectedStylish = readFile('expectedStylish.txt');
  const expectedPlain = readFile('expectedPlain.txt');
  const expectedJson = readFile('expectedJson.txt');

  const filePath1 = getFixturePath(`file1.${extention}`);
  const filePath2 = getFixturePath(`file2.${extention}`);

  expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
});
