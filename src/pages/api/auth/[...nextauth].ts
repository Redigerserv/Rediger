// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

declare module 'next-auth' {
    interface Session {
      accessToken?: string; // Add accessToken to the Session object
    }
  
    interface JWT {
      accessToken?: string; // Add accessToken to the JWT object
    }
  }

export default NextAuth({
    
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        httpOptions: {
            timeout: 50000, // Increase timeout to 10 seconds
          },
      authorization: {
        params: {
          scope: 'openid email profile'
        }
      }
    }),
  ],
  secret: '081d8023cf4f1008e913251e5824c9fad0d1a4e4dc981d4d5848d9559b6b2fea',
  debug: true,
  pages: {
    signIn: '/', // custom sign-in page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Return the base URL after login instead of the callbackUrl if not set correctly
      return url.startsWith(baseUrl) ? url : baseUrl;;
    },
    async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token as string;
        }
        return token;
      },
      async session({ session, token }) {
        // Send the access token to the client-side in the session object
        session.accessToken  = token.accessToken as string | undefined;;
        return session;
      },
  }
});     
    