import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import passport from 'passport'
import bodyParser from 'body-parser'
import keys from './config/keys'

require('./models/User') // Just to execute it
require('./services/passport') // Just to execute it

mongoose.connect(keys.mongoUri)

// import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use(bodyParser.json())

// express middlewares
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

// Import API Routes
// app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
