/*require('dotenv').config()
const express = require('express');
//const app = express();
const app = require('./app') // la aplicación Express real
const config = require('./utils/config')
const logger = require('./utils/logger')
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))
//const Person = require('./models/person')


//const PORT = process.env.PORT
//app.listen(PORT, () => {
//  console.log(`Server running on port ${PORT}`)
//})

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})*/

const app = require('./app') // la aplicación Express real
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})