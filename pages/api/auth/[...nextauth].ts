import NextAuth, { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// Validate environment variables at startup
const requiredEnvVars = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
}

for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    console.error(`Missing required environment variable: ${key}`)
    throw new Error(`Missing required environment variable: ${key}`)
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.readonly",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  logger: {
    error(code, metadata) {
      console.error(`[NextAuth] Error: ${code}`, metadata)
    },
    warn(code) {
      console.warn(`[NextAuth] Warning: ${code}`)
    },
    debug(code, metadata) {
      if (process.env.NODE_ENV === "development") {
        console.debug(`[NextAuth] Debug: ${code}`, metadata)
      }
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log("[NextAuth] Successful sign in", { user, account, profile, isNewUser })
    },
    async signOut({ session, token }) {
      console.log("[NextAuth] Sign out", { session, token })
    },
    async createUser({ user }) {
      console.log("[NextAuth] New user created", user)
    },
    async updateUser({ user }) {
      console.log("[NextAuth] User updated", user)
    },
    async linkAccount({ user, account, profile }) {
      console.log("[NextAuth] Account linked", { user, account, profile })
    },
    async session({ session, token }) {
      console.log("[NextAuth] Session created/updated", { session, token })
    },
  },
}

export default NextAuth(authOptions)

