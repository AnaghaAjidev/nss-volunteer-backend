const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://anaghaajidev:Anagha23@ac-agnsoij-shard-00-00.lk3iujt.mongodb.net:27017,ac-agnsoij-shard-00-01.lk3iujt.mongodb.net:27017,ac-agnsoij-shard-00-02.lk3iujt.mongodb.net:27017/volunteer_db?ssl=true&replicaSet=atlas-bjgzxl-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected")
})
.catch((error) => {
    console.log(error)
})

const Volunteer = mongoose.model("Volunteers", new mongoose.Schema({

    volunteer_id: String,
    full_name: String,
    email: String,
    phone: String,
    date_of_birth: String,
    gender: String,
    blood_group: String,
    department: String,
    year_of_study: String,
    camp_name: String,
    address: String,
    hours_completed: String,
    unit_number: String

}))

app.post("/add_volunteer", async (req, res) => {
    await Volunteer.create(req.body)
    res.json({
        status: "success"
    })
})

app.post("/view_volunteer", async (req, res) => {
    const volunteers = await Volunteer.find()
    res.json(volunteers)
})

app.listen(3000, () => {
    console.log("Server Started")
})