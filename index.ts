import express, {Express, Router, Request, Response} from 'express';
import * as config from "./knexfile";
const { Model } = require('objection');

const app: Express = express()
app.use(express.static("public"));
app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//     res.send("Hallo")
// })
// app.get("/", (req: Request, res: Response) => {
//     res.send("Hallo")   
// })
// app.get("/", (req: Request, res: Response) => {
//     res.send("Hallo")
// })
// app.get("/", (req: Request, res: Response) => {
//     res.send("Hallo")
// })

app.listen(3000, () => {
    console.log("server running on port 3000")
})