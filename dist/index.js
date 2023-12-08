"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const config = __importStar(require("./knexfile"));
const car_controller_1 = __importDefault(require("./controller/car-controller"));
const app_controller_1 = __importDefault(require("./controller/app-controller"));
const user_controller_1 = __importDefault(require("./controller/user-controller"));
const PORT = 3000;
const ENV = "development";
const TOKEN_SECRET = "secret_token";
// @ts-expect-error
const knexInstance = (0, knex_1.default)(config[ENV]);
const app = (0, express_1.default)();
class App {
    constructor(app) {
        this.app = app;
        objection_1.Model.knex(knexInstance);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
        this.routes();
    }
    routes() {
        new user_controller_1.default(app).init();
        new app_controller_1.default(app).init();
        new car_controller_1.default(app).init();
    }
}
new App(app).app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
