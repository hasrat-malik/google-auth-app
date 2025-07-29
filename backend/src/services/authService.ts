import { OAuth2Client } from 'google-auth-library';
import { Configuration } from '../config/config';

const CLIENT_ID = Configuration.google_client_id;
const client = new OAuth2Client(CLIENT_ID);

export const verifyGoogleIdToken = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  return ticket.getPayload();
};
