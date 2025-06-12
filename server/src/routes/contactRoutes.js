import express from 'express'
import { createContact } from '../controllers/contactController.js'
import validateContact from '../middleware/ValidateContact.js'

const router = express.Router()

router.post('/', validateContact, createContact)

export default router
