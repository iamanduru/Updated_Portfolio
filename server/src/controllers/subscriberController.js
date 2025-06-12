import prisma from '../../prisma/client.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export async function addSubscriber(req, res, next) {
  try {
    const { email } = req.body

    
    const subscriber = await prisma.subscriber.create({ data: { email } })

   
    await mailer.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to my newsletter!',
      text: `Thanks for subscribing! You'll hear from me soon with updates.`,
    })

   
    await mailer.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.NOTIFY_EMAIL,
      subject: 'New newsletter subscriber',
      text: `New subscriber: ${email}`,
    })

    res.status(201).json(subscriber)
  } catch (err) {
    next(err)
  }
}
