'use strict'

const express = require('express')

// Construct a router instance.
const router = express.Router()
const User = require('./models').User

// Handler function to wrap each route.
const asyncHandler = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (error) {
      // Forward error to the global error handler
      next(error)
    }
  }
}

// Route that returns a list of users.
router.get(
  '/users',
  asyncHandler(async (req, res) => {
    let users = await User.findAll()
    res.json(users)
  })
)

// Route that creates a new user.
router.post(
  '/users',
  asyncHandler(async (req, res) => {
    await User.create(req.body)
    res.status(201).json({ message: 'User successfully created!' })
  })
)

module.exports = router
