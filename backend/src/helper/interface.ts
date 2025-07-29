import { Response } from 'express';
import { ErrorType, HttpStatusCode } from "./enum";

export interface ISuccessResponse {
    <T>(res: Response, body: T, statusCode?: HttpStatusCode): Response;
}

export interface IErrorResponse {
    statusCode: HttpStatusCode;
    errorCode: ErrorType;
    message: string;
}

export interface IConfiguration {
    google_client_id: string;
}