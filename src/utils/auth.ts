import { Session, User } from "./../generated/prisma/index.d";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "./connect";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) throw new Error("Missing credentials");

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new Error("User not found");

        if (!user.password) throw new Error("Password not set for user");

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return user;
      },
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: { email: token.email! },
      });
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
