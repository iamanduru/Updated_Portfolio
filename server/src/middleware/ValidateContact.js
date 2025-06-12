
export default function validateContact(req, res, next) {
    const { name, email, subject, message } = req.body
  
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res
        .status(400)
        .json({ error: 'Please provide name, email, subject and message.' })
    }
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }
  
    next()
  }
  