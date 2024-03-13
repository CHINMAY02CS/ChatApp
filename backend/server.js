import  express from 'express'
import dotenv from 'dotenv'
import authRoutes from "./routes/auth_routes.js"
import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT ||5000;

// app.get("/",(req,res)=>res.send("Hello"))


//CREATING Middlewares
app.use(express.json()) //to parse incoming requests with the JSON payloads (from req.body)

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{

    connectToMongoDB();
    console.log(`Server is running on port ${PORT}` )
    
    })