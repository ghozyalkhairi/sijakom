import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { AuthOptions } from "next-auth/core/types"
import bcrypt from "bcrypt"

export const authOption: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            username: (credentials as Record<"username" | "password", string>)
              .username,
          },
        })
        if (user) {
          const isValid = await bcrypt.compare(
            (credentials as Record<"username" | "password", string>).password,
            user.password
          )
          if (isValid) {
            const { password, ...returnUser } = user
            return returnUser
          } else {
            throw new Error("Invalid username or password")
          }
        } else {
          throw new Error("User with that username does not exist")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
}

export default NextAuth(authOption)
