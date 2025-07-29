import dotenv from 'dotenv';
import { IConfiguration } from "../helper/interface";

dotenv.config();

export const Configuration: IConfiguration = {
    google_client_id: process.env.GOOGLE_CLIENT_ID!
}