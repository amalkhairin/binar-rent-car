import { Users } from "../models/users";
import UsersRepository from "../repositories/users-repository";

export default class UserServices {
    repository: UsersRepository;

    constructor(){
        this.repository = new UsersRepository();
    }

    async login(email: String) {
        return await this.repository.login(email);
    }

    async findByEmail(email: String) {
        return await this.repository.findByEmail(email);
    }

    async createUser(body: Partial<Users>) {
        return await this.repository.createUser(body);
    }
}