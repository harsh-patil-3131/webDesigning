import mongoose from "mongoose";
import express from "express";
const app = express()
const port = 3000;
app.set('view engine', 'ejs')
await mongoose.connect("mongodb://localhost:27017/company");

const dataSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});
const Employee = mongoose.model("Employee", dataSchema);

async function addDummy(){
    await Employee.deleteMany({})
    const names = ["Harshvardhan", "Kshitij", "Pruthviraj", "Aman", "Omraje", "Sarang", "Prathamesh", "Rajwardhan"];
    const languages = ["C++", "C", "Python", "Java", "Javascript", "HTML/CSS"];
    const cities = ["Banglore", "Pune", "NY", "USA", "Dubai", "Bangkok"];

    for (let i = 0; i < 10; i++) {
        const name = names[Math.floor(names.length * Math.random())];
        const lang = languages[Math.floor(languages.length * Math.random())];
        const city = cities[Math.floor(cities.length * Math.random())];
        const data = new Employee({
            name: name,
            salary: Math.floor(2000000*Math.random()),
            language: lang,
            city: city,
            isManager: Math.random()>0.5?true:false
        })
        await data.save();
    }
}
// jasdf ,asdf  sd, ffsafczoaewi' mc saf
app.get("/", (req, res)=>{
    // const employees = await Employee.find();
    res.render('index')
});

app.get("/generate", async(req, res)=>{
    await addDummy()
    console.log("Data added")
    const employees = await Employee.find();
    // res.render('index', { employees })
    res.json(employees)
})

app.listen(port, ()=>{
    console.log(`App is listening at the port ${port}`)
})
