import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [{ name: 'Victor Santiago', email: 'victorhsantiago3@gmail.com' }]

export default {
  index: async (req: Request, res: Response) => res.json(users),
  create: (req: Request, res: Response) => {
    const emailService = new EmailService()

    emailService.sendMail({
      to: {
        name: 'Marta Santiago',
        email: 'martaoliveiras88@gmail.com',
      },
      message: {
        subject: 'Bem vindo!',
        content: 'Ficamos muito felizes com a sua chegada.',
      },
    })

    return res.sendStatus(200)
  },
}
