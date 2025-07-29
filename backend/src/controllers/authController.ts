import { Request, Response } from 'express';
import { verifyGoogleIdToken } from '../services/authService';
import { SuccessResponse } from '../helper/common-response';

export const verifyGoogleAuth = async (req: Request, res: Response) => {
  const { token } = req.body;
    const tokens = await verifyGoogleIdToken(token);
    return SuccessResponse(res, tokens);
};
