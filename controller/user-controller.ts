import { Express, Request, Response } from "express";
import { Users } from "../models/users";
import UserServices from "../services/user-services";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NotFoundError, ValidationError } from "objection";

const TOKEN_SECRET = "secret_token";

export default class UsersController {
    app: Express;
    service: UserServices;

    constructor(app: Express) {
        this.app = app;
        this.service = new UserServices();
    }

    init() {
        this.app.post('/login', (req, res) => this.login(req, res));
        this.app.post('/register', (req, res) => this.register(req, res));
    }

    async login(req: Request<{}, {}, Omit<Users, "id">>, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.service.login(email);
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({email: user.email, id: user.id}, TOKEN_SECRET, {
                    expiresIn: "1h"
                })
                return res.json({
                    data: user,
                    token: token
                })
            } else {
                res.status(401).json({
                    "message": "Wrong password!"
                })
            }
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({
                    message: "User not found!",
                });
            }
            return res.sendStatus(400).json({ message: "Invalid credentials!" });
        }
    }

    async register(req: Request<{}, {}, Users, {}>, res: Response) {
        try {
            const { email, password } = req.body;
            const existingUser = await this.service.findByEmail(email);
            if (existingUser) {
                res.status(409).json({
                    message: "Email already registered!"
                })
            } else {
                const user = await this.service.createUser({email: email, password: await bcrypt.hash(password, 10)});
                const token = jwt.sign({email: user.email, id: user.id}, TOKEN_SECRET, {
                    expiresIn: "1h"
                })

                return res.json({
                    data: user,
                    token: token
                })
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                return res.status(400).json({
                    status: 400,
                    data: error.message,
                });
            }
            return res.sendStatus(500).json({ message: "Internal server error!" });
        }
    }
}