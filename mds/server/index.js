import express from 'express'
import morgan from 'morgan'

import taskRoutes from './routes/index.js'

const PORT = 3000

const app = express()

app.use(morgan('dev'));

app.use(taskRoutes)

app.listen(PORT)
console.log(`Server Running ${PORT}`)