import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error-abstract";


export class DatabaseConnectionError extends CustomError {
    reason = 'Error connecting to database';
    statusCode = 500;

    constructor() {
        super('Error connecting to database');
        
        // Because we are subclassing standard lib class `Error`
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}