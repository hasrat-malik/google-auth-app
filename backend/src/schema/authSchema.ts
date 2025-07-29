import { Joi } from 'celebrate';

export const authSchema = {
    googleAuth: {
        body: {
            token: Joi.string().required()
        }
    }
}