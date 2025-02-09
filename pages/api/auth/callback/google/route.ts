import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Google callback received:", req.query)

  // Redirect to the NextAuth callback URL
  res.redirect(`/api/auth/callback/google${req.url?.split("?")[1] ? "?" + req.url.split("?")[1] : ""}`)
}

