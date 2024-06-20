import express from "express"
import bodyParser from "body-parser"

var app = express()
var port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) =>{
    res.render("index.ejs")
})

app.get("/catconf", (req, res) =>{
    res.render("catConf.ejs")
})

app.post("/catconf", (req, res) =>{
    console.log(req.body)
})

app.listen(port, (req,res) => {
    console.log(`Server is running in port ${port}`)
})