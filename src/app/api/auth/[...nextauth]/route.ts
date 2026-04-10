import { NextAuthConfig } from "@/lib/NextUthe.config"
import NextAuth from "next-auth"

const handler = NextAuth(NextAuthConfig)

export { handler as GET, handler as POST }


