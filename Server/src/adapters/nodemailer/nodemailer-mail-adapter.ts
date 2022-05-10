import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer  from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f320a01a37150f",
      pass: "dba6faa9ddc01e"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
          await transport.sendMail({
    
           from: 'Equipe DeGabriel <contatodegabrielofi@feedget.com>',
           to: 'Gabriel Silva <contatodegabrielofi@gmail.com>',
           subject,
           html: body,
       
        });
  };
}