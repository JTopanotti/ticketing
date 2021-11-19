import { CustomError } from "./custom-error-abstract";

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(private msg: string) {
        super(msg);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [ { message: this.msg } ];
    }
}