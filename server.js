import express from "express"
import connectDB from './config/db'

const app = express()

// import routes
import usersRoute from './routes/users'
import authRoute from './routes/auth'
import profileRoute from './routes/profile'

// connect to database
connectDB()

// initiate middleware
app.use(express.json({ extended: false }))

// define routes
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.use('/api/profile', profileRoute)

const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
