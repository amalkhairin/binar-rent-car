import { CarsModel, Cars } from "../models/cars";

export default class CarsRepository {
    async getAll() {
        return await CarsModel.query();
    }

    async getById(id: number) {
        return await CarsModel.query().findById(id).throwIfNotFound();
    }

    async create(body: Cars) {
        return await CarsModel.query().insert(body).returning('*');
    }

    async update(id: number, body: Partial<Cars>) {
        return await CarsModel.query().where({id}).patch(body).throwIfNotFound().returning("*");
    }

    async delete(id: number) {
        return await CarsModel.query().deleteById(id).throwIfNotFound().returning("*");
    }
}