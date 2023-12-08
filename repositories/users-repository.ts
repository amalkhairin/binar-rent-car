import { UsersModel, Users } from "../models/users";

export default class UsersRepository {
    async login(email: String) {
        return await UsersModel.query().findOne({email: email}).throwIfNotFound();
    }

    async findByEmail(email: String) {
        return await UsersModel.query().findOne({email: email});
    }

    async createUser(body: Partial<Users>) {
        return await UsersModel.query().insert(body).returning("*");
    }
}