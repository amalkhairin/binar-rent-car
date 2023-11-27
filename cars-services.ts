import { Express, Response, Request } from "express";
import { CarsModel, Cars } from "./models/cars";
import { ValidationError } from "objection";

export class CarsService {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  init() {
    this.app.get("/cars", this.getAll);
    this.app.post("/cars", this.create);
    this.app.get("/cars/:id", this.getById);
    this.app.patch("/cars/:id", this.patch);
    this.app.delete("/cars/:id", this.delete);
  }

  async getAll(req: Request, res: Response) {
    const { plate } = req.query;
      const qCars = CarsModel.query();

      if (plate) {
        qCars.where("plate", "like", `%${plate}%`);
      }

      const cars = await qCars;
      res.send(cars);
  }

  async getById(req: Request, res: Response) {
    const cars = await CarsModel.query().findById(req.params.id);
    res.send(cars);
  }

  async create(req: Request<{}, {}, Cars, {}>, res: Response) {
    try {
      const body = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.specs),
      };
      const car = await CarsModel.query().insert(body).returning("*");
      res.send(car);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.send({
          message: error.message,
        });
      }
    }
  }

  async patch(req: Request, res: Response) {
    const body = {
      ...req.body,
      specs: JSON.stringify(req.body.specs),
      options: JSON.stringify(req.body.options),
    };
    const car = await CarsModel.query().findById(req.params.id).patch(body);
    res.send(car);
  }

  async delete(req: Request, res: Response) {
    const car = await CarsModel.query().deleteById(req.params.id);
    res.send(car);
  }
}