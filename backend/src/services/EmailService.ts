interface IMailTo {
  name: string
  email: string
}
interface IMailMessage {
  subject: string
  content: string
  attachment?: string[]
}

interface IMessageDTO {
  to: IMailTo
  message: IMailMessage
}

class EmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService
