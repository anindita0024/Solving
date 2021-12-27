require('dotenv').config({path :`.env`})
const  express = require('express')
const mongoose = require('mongoose')
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriRoute = require("./routes/categories");
const multer = require("multer")
app.use(express.json())



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('mongoDB  is connected'))
.catch((err) => console.log(err))




const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"image")
    }, filename:(req,file,cb) => {
        cb(null,req.body.name)
    }
})


const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) =>{
    res.status(200).json("file uploaded")
})


app.use("/api/auth" ,authRoute)
app.use("/api/users" ,userRoute)
app.use("/api/posts" ,postRoute)
app.use("/api/categories" ,categoriRoute)







app.listen('8000',() =>{
    console.log("server is running")
})