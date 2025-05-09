import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/auth.routes.js'
import problemRoutes from './routes/problems.routes.js'
import executionRoutes from './routes/executeCode.routes.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello Coders wecome to our 2nd Home LeetLab')
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/problems', problemRoutes )
app.use('/api/v1/execute-code', executionRoutes)

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });
  

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})