import express from "express"

var app = express()
var port = 3000

app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.render("index.ejs")
})

app.get("/catconf", (req, res) =>{
    res.render("catConf.ejs")
})

app.listen(port, (req,res) => {
    console.log(`Server is running in port ${port}`)
})