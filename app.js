const express = require("express")
const bodyParser = require("body-parser")
const day=require(__dirname+"/day.js")

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

let newitems =["Wake up at 7 am", "Get ready by 8:30 am", "Start reading by 8:45 am"]
let workItems=[]

app.get("/", (req, res) => {
    
    res.render("list",{listTitle:day.day(), item:newitems});
})


app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle:"Work List",item:workItems})
})


app.post("/",(req,res)=>{
    console.log(req.body)
    if(req.body.list==="Work List")
    {
        workItems.push(req.body.newItem);
        res.redirect("/work")
    }
    else{
    newitems.push(req.body.newItem)
    res.redirect("/")
    }
    
    
})

app.listen("3000", () => {
    console.log("Server running on 3000")
})