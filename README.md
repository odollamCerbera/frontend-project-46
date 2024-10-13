### Hexlet tests and linter status:
[![Actions Status](https://github.com/odollamCerbera/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/odollamCerbera/frontend-project-46/actions)
[![.github/workflows/nodejs.yml](https://github.com/odollamCerbera/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/odollamCerbera/frontend-project-46/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/d770fa79fd535cae76d3/maintainability)](https://codeclimate.com/github/odollamCerbera/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d770fa79fd535cae76d3/test_coverage)](https://codeclimate.com/github/odollamCerbera/frontend-project-46/test_coverage)

# Проект "Вычислитель отличий"

Проект представляет собой программу для сравнения файлов, которая после установки становится доступной по имени gendiff. 
Запуск команды с флагом -h(--help) предоставит справочную информацию по использованию утилиты:

```
gendiff -h

  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -f, --format [type]  output format
    -h, --help           output usage information
```
Данная утилита принимает два аргумента — абсолютные или относительные пути двух файлов, которые сравниваяются между собой. Поддерживаются форматы входных данных json, yaml (файлы с расширением .yml, .yaml).
Результат сравнения файлов выводится в формате stylish по умолчанию. Для представления результата в виде json и plain text необходимо указать опцию -f(--format):
```
gendiff --format plain file1.json file2.json
```
### Примеры использования gendiff

1. [Генерация разницы между двумя файлами .json;](https://skr.sh/vSA4CSELjYw "Генерация разницы между двумя файлами .json")
2. [Генерация разницы между двумя файлами .yaml;](https://skr.sh/vSAkfLMW1lm "Генерация разницы между двумя файлами .yaml")
3. [Генерация разницы между двумя файлами .yml](https://skr.sh/vSACpXqgT1a "Генерация разницы между двумя файлами .yml")

## Установка
После клонирования репозитория необходимо установить все зависимости:
```
make install  
npm link 
```
