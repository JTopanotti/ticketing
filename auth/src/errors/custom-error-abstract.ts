export abstract class CustomError extends Error {

    constructor(msg: string) {
        super(msg);
        
        // Because we are subclassing standard lib class `Error`
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract statusCode: number;
    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[]
};