import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';

import { verifyPassword } from '../../../helper';
import { connectDatabase } from '../../../services/database';

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const client = connectDatabase();

        const usr = client.findOne({
          username: credentials?.username ?? undefined,
        });

        if (!usr) {
          throw new Error('User name is not found');
        }

        const isValid = await verifyPassword(credentials?.password || '', usr.password);

        if (!isValid) {
          throw new Error('Password is incorrect');
        }
        const user = {
          id: usr.uuid,
          name: usr.username,
        };

        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
});
