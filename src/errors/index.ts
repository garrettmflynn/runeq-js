export class RuneError {
    constructor() {
        
    }
}

export class APIError extends RuneError{
    statusCode:any;
    details:any;

    constructor(statusCode: any, details:any) {
        super()
        this.statusCode = statusCode
        this.details = details
    }
}
