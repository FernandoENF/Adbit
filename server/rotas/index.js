const express = require('express')
const router = express.Router()

router.use('/', require('./register'))
router.use('/', require('./login'))
router.use('/', require('./links'))

module.exports = router