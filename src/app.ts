import express from 'express'
import bodyParser from 'body-parser';
import 'dotenv'
import { router } from './routes/car.routes'
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api', router)

export { app }