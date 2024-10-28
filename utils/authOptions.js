import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   Add authorization so that the app won't use only the first google account that was used
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // ... add more providers here
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to the database
      // 2. Check if user exists
      // 3. If not, create user
      // 4. Return true to allow sign in
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      // 1. Get user from database
      // 2. Assign the user id from the sesion
      // 3. Return session
    },
  },
};

export default NextAuth(authOptions);
