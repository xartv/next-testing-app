import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/data/users";

export const authConfig: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (currentUser) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
