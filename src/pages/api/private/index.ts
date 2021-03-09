import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    return res.send({
      content: 'Welcome' + session.user.name
    })
  }

  return res.send({
    error: 'Youre not logged in'
  })
}
