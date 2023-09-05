const express = require('express')
const router = express.Router()
const {sendVerificationEmail, verificationCode, signUp, logIn} = require('./controllers')
const {validateSignUp} = require('../auth/middlewear')
const {upload} = require('./utils')

router.post('/api/auth/sendmail', sendVerificationEmail)
router.get('/api/auth/verifycode', verificationCode)
router.post('/api/auth/signUp', upload.single('company_logo'),  validateSignUp,  signUp)
router.post('/api/auth/login', logIn)

module.exports = router