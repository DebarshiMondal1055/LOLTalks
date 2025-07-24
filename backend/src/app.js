import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"18kb"}))
app.use(express.urlencoded({extended:true,limit:"18kb"}));
app.use(express.static("public"))
app.use(cookieParser())


//routers import 


import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import requestRouter from "./routes/request.routes.js"
import chatRouter from "./routes/chat.routes.js"

app.use("/api/v1/auth",authRouter)

//friends router



app.use("/api/v1/user",userRouter)



app.use("/api/v1/request",requestRouter)

app.use("/api/v1/chats",chatRouter)





export {app};