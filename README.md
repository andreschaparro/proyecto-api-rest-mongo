# Proyecto: API REST (CRUD) hecho con Node JS, Express, MongoDB, Mongoose, y Docker

[LINK AL BACKEND(RAILWAY)](https://proyecto-api-rest-mongo-production.up.railway.app/)

## Software a instalar

- [Postman](https://www.postman.com/downloads/).
- [MongoDB Compass](https://www.mongodb.com/try/download/compass).
- [Docker](https://www.docker.com/get-started/).

## Paquetes de Node JS

- [nodemon](https://www.npmjs.com/package/nodemon).
- [dotenv](https://www.npmjs.com/package/dotenv).
- [env-var](https://www.npmjs.com/package/env-var).
- [Express](https://expressjs.com/en/5x/api.html).
- [body-parser](https://www.npmjs.com/package/body-parser).

## Ejecutar el proyecto localmente

1. Clonar el repositorio.
2. Abrir el Visual Studio Code.
3. Ejecutar `npm install`.
3. Crear el archivo `.env` utilizando la plantilla.
4. Ejecutar `docker compose up -d`.
5. Ejecutar `npm run dev`.

📝Se recomienda utilizar el `PORT` 3000 en la plantilla.

## Prueba con MongoDB Compass

![1_conexion](./mongodb_compass/1_conexion.png)
![2_base_de_datos](./mongodb_compass/2_base_de_datos.png)

## Prueba con Postman

![1_get_books](./postman/1_get_books.png)
![2_post_book_error](./postman/2_post_book_error.png)
![3_post_book](./postman/3_post_book.png)
![4_get_book_error](./postman/4_get_book_error.png)
![5_get_book](./postman/5_get_book.png)
![6_put](./postman/6_put.png)
![7_patch_error](./postman/7_patch_error.png)
![8_patch](./postman/8_patch.png)
![9_delete](./postman//9_delete.png)

Autor: Ing. Andres Chaparro