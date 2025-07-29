export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorType {
    VALIDATION = 'VALIDATION',
    AUTH = 'AUTH',
    FORBIDDEN = 'FORBIDDEN',
    NOT_FOUND = 'NOT_FOUND',
    SERVER = 'SERVER',
    UNKNOWN = 'UNKNOWN',
    CodeMismatchException = 'CodeMismatchException',
    NotAuthorizedException = 'NotAuthorizedException'
}

export enum ErrorMessages {
    VALIDATION = 'Input validation failed.',
    AUTH = 'Authentication failed.',
    FORBIDDEN = 'Access to this resource is forbidden.',
    NOT_FOUND = 'The requested resource was not found.',
    SERVER = 'Internal server error.',
    UNKNOWN = 'An unexpected error occurred.'
};
