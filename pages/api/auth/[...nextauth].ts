import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import crypto from 'crypto';
import prisma from "../../../lib/prismadb";
import Cookies from 'cookies';

function compareState(savedState, state) {
  const hash = crypto
    .createHash('sha256')
    .update(savedState)
    .digest('hex');
  return hash === state;
}

async function checkCallbackState(ctx, state) {
  const cookies = new Cookies(ctx.req, ctx.res);
  const savedState = cookies.get('oauth_state');
  cookies.set('oauth_state', '', { maxAge: -1 });

  return compareState(savedState, state);
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    checkCallbackState: checkCallbackState,
  })]
};
export default NextAuth({
  ...authOptions
});