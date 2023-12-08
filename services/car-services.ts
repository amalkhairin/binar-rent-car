import { Cars } from "../models/cars";
import CarsRepository from "../repositories/cars-repository";

export default class CarServices {
    repository: CarsRepository;

    constructor(){
        this.repository = new CarsRepository();
    }

    async getAll() {
        return await this.repository.getAll()
    }

    async getById(id: number) {
        return await this.repository.getById(id);
    }

    async create(body: Cars) {
        return await this.repository.create(body);
    }

    async update(id: number, body: Partial<Cars>) {
        return await this.repository.update(id, body);
    }

    async delete(id: number){
        return await this.repository.delete(id);
    }
}