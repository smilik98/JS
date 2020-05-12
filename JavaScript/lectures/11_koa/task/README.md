# Знакомство с веб-фреймворком Koa

## Перед выполнением:
- Глянуть документацию Koa.
- Глянуть [paralect/koa-api-starter](https://github.com/paralect/koa-api-starter)
- Сверстать статический `index.html` содержащий индикатор посещений и 3 поля ввода:
  - input для имени и фамилии
  - textarea для описания
  - select от 0 до 10 для оценки

## Выполнение задания:
Сделать простейший веб-сервер на Koa.

Требования к серверу:
- Сервер раздаёт `index.html` по запросу на `/`.
- Индикатор посещений увеличивается при каждом новом посещении страницы пользователем.
- Форму можно отправить на сервер запросом `POST` на `/form`.
- При получении данных формы сервер их логгирует `console.dir(...)`.

## Advanced
Добавить в форму возможность отправки картинки. После отправки формы мы должны быть перенаправлены на `url` c этой картинкой.

## Полезные ссылки
- [koa-hbs](https://github.com/koajs/koa-hbs)
- [async-busboy](https://github.com/m4nuC/async-busboy)
- [koa-multer](https://github.com/koa-modules/multer)