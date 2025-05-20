import prisma from '../prisma/client.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, 
  },
})

export async function createContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body

 
    const contact = await prisma.contact.create({
      data: { name, email, subject, message },
    })

    
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thanks for reaching out!',
      text: `Hi ${name},\n\nThanks for your message. I'll get back to you within 1 business day.\n\n— Anduru`,
    })

    
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.NOTIFY_EMAIL,
      subject: `New contact form submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    })

    res.status(201).json(contact)
  } catch (err) {
    next(err)
  }
}
