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


app.use('/api/contact', contactRoutes)
app.use('/api/subscribe', subscriberRoutes)

// health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))


app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`))
