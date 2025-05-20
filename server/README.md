// prisma/client.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma


// src/controllers/contactController.js
import prisma from '../prisma/client.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Use an App Password for Gmail
  },
}),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function createContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body
    // save to database
    const contact = await prisma.contact.create({ data: { name, email, subject, message } })

    // send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thanks for reaching out! 🎉',
      text: `Hi ${name},\n\nThanks for your message. I'll get back to you within 1 business day.\n\n— Anduru`,
    })

    // notify yourself
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


// src/controllers/subscriberController.js
import prisma from '../prisma/client.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Use an App Password for Gmail
  },
}),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function addSubscriber(req, res, next) {
  try {
    const { email } = req.body

    // save to database
    const subscriber = await prisma.subscriber.create({ data: { email } })

    // send welcome email
    await mailer.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to my newsletter!',
      text: `Thanks for subscribing! You'll hear from me soon with updates.`,
    })

    // notify yourself
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


// src/routes/contactRoutes.js
import express from 'express'
import { createContact } from '../controllers/contactController.js'

const router = express.Router()
router.post('/', createContact)
export default router


// src/routes/subscriberRoutes.js
import express from 'express'
import { addSubscriber } from '../controllers/subscriberController.js'

const router = express.Router()
router.post('/', addSubscriber)
export default router


// src/index.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes.js'
import subscriberRoutes from './routes/subscriberRoutes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// mount routes
app.use('/api/contact', contactRoutes)
app.use('/api/subscribe', subscriberRoutes)

// health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// global error handler
app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`))
