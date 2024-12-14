import express from 'express'
import AnimalsController from "./controllers/AnimalsController.js";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.end("witaj w zoo")
})

app.get("/animals", AnimalsController.GetAnimals)
app.get("/animals/endangered", AnimalsController.GetAllAnimalsEndangered)
app.get("/animals/habitat/:habitat", AnimalsController.GetAllAnimalsInHabitat)

app.post("/animals", AnimalsController.PostNewAnimal)



app.listen(port, () => {
    console.log(`serwer na ${port}`)
})