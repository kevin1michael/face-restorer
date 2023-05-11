import { getCsrfToken } from 'next-auth/react';
import crypto from 'crypto';
import GoogleProvider from 'next-auth/providers/google';
import Cookies from 'cookies';

function createRandomState() {
  return crypto.randomBytes(16).toString('hex');
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const csrfToken = await getCsrfToken({ req });

    // Update the `callbackUrl` to include the correct port
    const callbackUrl = `${process.env.NEXTAUTH_URL}/api/auth/callback/google`;

    const provider = GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    });

    const state = createRandomState();

    const cookies = new Cookies(req, res);
    cookies.set('oauth_state', state, { httpOnly: true, sameSite: 'lax' });

    console.log(provider.authorizationUrl)

    const url = new URL("https://accounts.google.com/o/oauth2/auth");
    url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID);
    url.searchParams.set('redirect_uri', callbackUrl);
    url.searchParams.set('scope', "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email");
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('state', state);
    url.searchParams.set('prompt', 'consent');
    url.searchParams.set('access_type', 'offline');

    res.status(200).json({ url: url.toString() });
  } else {
    res.status(405).end(); // Method not allowed
  }
}