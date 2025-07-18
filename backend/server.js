
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import ConnectDb from './src/config/db.js'
import {clerkMiddleware} from '@clerk/express'
import clerkWebHooks from './src/controllers/clerkWebHooks.js'

//Db Connection
ConnectDb()

const app = express()
app.use(cors())//Enable cross origin resource sharing 


//middleware
app.use(express.json())
app.use(clerkMiddleware())


//Api Endpoints to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebHooks)




app.get('/', (req, res) => res.send("Api is working successfully") )

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))