import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error-abstract";


export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters');
        
        // Because we are subclassing standard lib class `Error`
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(error => {
            return { message: error.msg, field: error.param };
        });
    }
}