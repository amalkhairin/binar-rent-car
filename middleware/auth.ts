import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { Users } from "../models/users";

const TOKEN_SECRET = "secret_token";

// Declare additional types
// since our user object are not part of our program
// the type of req.user must be profided
declare namespace Express {
    export interface Request {
      user?: Users;
    }
  }
  

export default function (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.sendStatus(401).json({ message: "Invalid Token" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
        return res.sendStatus(403).json({ message: "Forbidden" });
        }
        
        req.user = user;
        next();
    });

}