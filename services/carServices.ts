import { Express, Response, Request } from "express";
import { Car, Cars } from "../model/car";

export class CarSevices {
    app: Express;

    constructor(app: Express) {
        this.app = app;
    }

    init() {
        
    }
}