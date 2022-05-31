import { Request, Response, NextFunction } from "express"
import { CustomError } from "../errors/custom-error-abstract";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    return res.status(400).send({
        errors: [{ message: "Unexpected error" }]
    });
};