const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const newsRouter = require('./routes/api/news')
const authRouter = require('./routes/api/auth');
const loreRouter = require('./routes/api/lore')
const cyberRouter = require('./routes/api/cyber')
const additionalRouter = require('./routes/api/additional')
const findmatesRouter = require('./routes/api/findmates')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
 
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);
app.use('/api/lore', loreRouter);
app.use('/api/cyber', cyberRouter);
app.use('/api/additional', additionalRouter);
app.use('/api/findmates', findmatesRouter);
app.use('/avatars', express.static('public/avatars'));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})


module.exports = app