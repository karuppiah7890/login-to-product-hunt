const taiko = require('taiko')

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
    await taiko.openBrowser()
    await taiko.goto("https://producthunt.com")
    await taiko.click("Sign In")
    await taiko.click(await taiko.$(`//button[@data-test="login-with-twitter"]`))
    await taiko.click("Sign In")
    await taiko.click(taiko.textBox())
    await taiko.write(process.env.TWITTER_EMAIL_ID)
    await taiko.click("Next")
    await taiko.write(process.env.TWITTER_PASSWORD)
    await taiko.click("Log In")
    await taiko.closeBrowser()

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}