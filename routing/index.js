const express = require('express');
const router = express.Router();
const email_sending = require('../api/email-sending')

router.use('/email-sending', email_sending);

module.exports = router;