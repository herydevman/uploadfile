const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs-extra")

const multer = require('multer')
app.use("/uploads", express.static("uploadingfile"))
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let path ='uploadingfile'
        
        fs.mkdirsSync(path);
        cb(null, path);
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})




app.post('/upload', upload.any(), function
(req, res, next) {
    console.log(req.body)
 res.send()
})

app.listen(3000, console.log("your app is running"))
