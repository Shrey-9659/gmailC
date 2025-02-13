const express = require("express")
const dotenv = require("dotenv");
const connectDb = require('./db/connectDb'); 
const cookieParser = require("cookie-parser");
const cors = require("cors")
const userRoute = require("./routes/user.routes")
const emailRoute = require("./routes/email.routes")
const PORT = 8080;

dotenv.config();
connectDb();

const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
const corsOptions = {
    origin : "http://localhost:5173",
    credentials : true
}
app.use(cors(corsOptions))

// routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/email", emailRoute )


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})