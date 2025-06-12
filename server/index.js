
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import contactRoutes from './src/routes/contactRoutes.js'
import subscriberRoutes from './src/routes/subscriberRoutes.js'
import errorHandler from './src/middleware/errorHandler.js'

dotenv.config()

const app = express()
const corsOptions = {
    origin: 'http://localhost:5174/',
    methods: 'GET,POST',
    credentials: true
  }
  app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/contact', contactRoutes)
app.use('/api/subscribe', subscriberRoutes)

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server on port ${PORT}`))
