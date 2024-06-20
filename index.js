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
    // console.log(req.body["dropdownList"])
    const dropListValue = req.body["dropdownList"]

    var redEmail = req.body["RedEmail"]
    var blackEmail = req.body["BlackEmail"]
    var emailSM = req.body["EmailSM"]
    var controlStation = req.body["controlStation"]
    var catName = req.body["catName"]
    
    switch (dropListValue) {
        case "1":
        case "3":
        var emailGW = req.body["EmailGW"]
        var controlCat = req.body["controlCat"]
        break;
    
        default: console.log(req.body)
        }
    
})

app.listen(port, (req,res) => {
    console.log(`Server is running in port ${port}`)
})