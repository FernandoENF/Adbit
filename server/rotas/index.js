const express = require('express')
const router = require('express').Router()

router.use('/', require('./register'))

module.exports = router