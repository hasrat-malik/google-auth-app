import express from 'express';
import { verifyGoogleAuth } from '../controllers/authController';
import { authSchema } from '../schema/authSchema';
import { celebrate } from 'celebrate';

const { googleAuth } = authSchema;

const router = express.Router();

router.post('/auth/google', celebrate(googleAuth), verifyGoogleAuth);

export default router;
