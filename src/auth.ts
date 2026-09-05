import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "google") {
        token.googleSubject = account.providerAccountId;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user && token.googleSubject) {
        session.user.id = token.googleSubject as string;
      }

      return session;
    },
  },
});
