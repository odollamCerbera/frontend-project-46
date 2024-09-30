#!/usr/bin/env node
import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')

  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>', 'First file address')
  .argument('<filepath2>', 'Second file address');

program.parse();

