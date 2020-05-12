# Задание

1. Установить [Mongo 3.0](https://www.mongodb.com/download-center#previous), [RoboMongo](https://robomongo.org/download)
2. Поднять монгу и подключиться через робомонго к ней. Поработать с коллекциями (CRUD, aggregation)
2. Раздаботать схему для электронного магазина (Сущности: пользователи, магазины, продукты, заказы)
3. Разораться с[mongoskin](https://github.com/kissjs/node-mongoskin), исправить [баг](https://github.com/kissjs/node-mongoskin/pull/200) в последней версии
4. Создать базу данных mongomart. Импортировать данные из папки data в базу данных (`mongoimport --drop -d mongomart -c item data/items.json`,`mongoimport --drop -d mongomart -c cart data/cart.json`).
4. Дописать все необходимые запросы в файле mongo.js

