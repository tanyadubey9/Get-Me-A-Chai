  import NextAuth from 'next-auth'
  import GoogleProvider from 'next-auth/providers/google'
  // import EmailProvider from 'next-auth/providers/email'
  import GitHubProvider from "next-auth/providers/github";
  // import LinkedInProvider from 'next-auth/providers/linkedin';
  import mongoose from 'mongoose';
  import User from '@/models/User';
  import Payment from '@/models/Payment';
  import connectDB from '@/db/connectDB';

  export const authoptions = NextAuth({
    providers: [
      // OAuth authentication providers...      
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        redirectUri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
        scope: "read:user user:email",
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        redirectUri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
        scope: "openid email profile",
      }),
      // LinkedInProvider({
      //   clientId: process.env.LINKEDIN_ID,
      //   clientSecret: process.env.LINKEDIN_SECRET, 
      // }),
      
      // // Passwordless / email sign in
      // EmailProvider({
      //   server: process.env.MAIL_SERVER,
      //   from: 'NextAuth.js <no-reply@example.com>'
      // }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account.provider == 'github' || account.provider === 'google') {
          await connectDB()
          // check if the user already exits in the database
          const currentUser = await User.findOne({ email: user.email })
          if (!currentUser) {
            // if the user does not exist, create a new user
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            })
          }
          return true
        }
      },

      async session({ session, user, token }) {
        await connectDB()
        const dbUser = await User.findOne({ email: session.user.email });
        // console.log(dbUser)
          session.user.name = dbUser.username;
        return session;
      },
    }
  });

  export { authoptions as GET, authoptions as POST }  