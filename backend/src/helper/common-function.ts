import { isCelebrateError } from 'celebrate';
import { ErrorMessages, ErrorType, HttpStatusCode } from './enum';
import {IErrorResponse} from './interface';

export function getCommonErrorResponse(error: any): IErrorResponse {
  console.error('API Error: ', error);
  let errorResponse: IErrorResponse = {
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    errorCode: ErrorType.SERVER,
    message: ErrorMessages.SERVER
  }
  if (isCelebrateError(error)) {
    // Celebrate validation errors are stored in a Map
    const segment = error.details.keys().next().value; // 'body', 'query', etc.
    const validationError = error.details.get(String(segment));
    const message = validationError?.details?.[0]?.message || 'Validation failed';
    errorResponse = {
      statusCode: HttpStatusCode.BAD_REQUEST,
      errorCode: ErrorType.VALIDATION,
      message: message.replace(/['"]/g, '')
    }
    return errorResponse;
  }
  switch (error.code) {
    case ErrorType.CodeMismatchException:
      errorResponse = {
        statusCode: HttpStatusCode.BAD_REQUEST,
        errorCode: ErrorType.CodeMismatchException,
        message: error.message
      }
      break;
    case ErrorType.NotAuthorizedException:
      errorResponse = {
        statusCode: HttpStatusCode.BAD_REQUEST,
        errorCode: ErrorType.NotAuthorizedException,
        message: error.message
      }
      break;
  }
  return errorResponse;
}