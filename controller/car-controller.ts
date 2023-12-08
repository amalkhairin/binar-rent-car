import { Express, Request, Response } from "express";
import CarServices from "../services/car-services";
import { Cars } from "../models/cars";
import { errorWrapper } from "../utils/error-wrapper";

interface IParams {
    id: string;
}

export default class CarController {
    app: Express;
    service: CarServices;

  constructor(app: Express) {
    this.app = app;
    this.service = new CarServices();
  }

  init() {
    this.app.get("/cars", (req, res) => this.getAll(req, res));
    this.app.post("/cars", (req, res) => this.create(req, res));
    this.app.get("/cars/:id", (req, res) => this.getById(req, res));
    this.app.patch("/cars/:id", (req, res) => this.update(req, res));
    this.app.delete("/cars/:id", (req, res) => this.delete(req, res));
  }

  async getAll(_req: Request, res: Response){
    const result = await errorWrapper(this.service.getAll());
    return res.status(result.status).json(result.data);
  }

  async getById(req: Request, res: Response) {
    const result = await errorWrapper(this.service.getById(+req.params.id));
    return res.status(200).json(result);
  }

  async create(req: Request<{}, {}, Cars, {}>, res: Response) {
    const body = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.specs),
    };
    const result = await errorWrapper(this.service.create(body));
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response){
    const body = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.options),
    };
    const result = await errorWrapper(this.service.update(+req.params.id, body))
    return res.status(200).json(result);
  }

  async delete(req: Request, res: Response){
    const result = await errorWrapper(this.service.delete(+req.params.id));
    return res.status(200).json(result);
  }
}