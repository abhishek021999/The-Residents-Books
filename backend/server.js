import express from "express"
import "dotenv/config"
import cors from "cors"


import  {Connection}  from "./Config/db.js"
import { profileRouter } from "./Routes/profile.route.js"

const app = express()
app.use(express.json());

app.use(cors({
  origin:"*",
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.use("/api/profile",profileRouter)


const PORT = process.env.PORT || 8001


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
    Connection()
})

