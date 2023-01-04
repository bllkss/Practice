import { Sequelize } from "sequelize-typescript";

import { Dog } from "./models";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "sequelize",
  logging: false,
  models: [Dog],
});

export default connection;
