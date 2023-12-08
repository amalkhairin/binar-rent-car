import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import { CarsService } from "./cars-services";
import { OrderService } from "./orders-services";
import * as config from "./knexfile";
import CarController from "./controller/car-controller";
import AppController from "./controller/app-controller";
import { Users } from "./models/users";
import UsersController from "./controller/user-controller";

const PORT = 3000;
const ENV = "development";
const TOKEN_SECRET = "secret_token";
// @ts-expect-error
const knexInstance = knex(config[ENV]);

declare namespace Express {
  export interface Request {
    user?: Users;
  }
}


const app: Express = express();

class App {
  app: Express;

  constructor(app: Express) {
    this.app = app;

    Model.knex(knexInstance);

    this.app.use(express.json());
    this.app.use(express.static("public"));

    this.routes();
  }

  routes() {
    new UsersController(app).init();
    new AppController(app).init();
    new CarController(app).init();
  }
}

new App(app).app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
