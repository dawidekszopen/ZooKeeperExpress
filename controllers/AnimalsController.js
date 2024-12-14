import AnimalsService from "../services/AnimalsService.js";

const ZooController = {
    async GetAnimals(req, res){
        try{
            const result = await AnimalsService.GetAnimals()
            console.log(result)
            res.status(200).json(result)
        }
        catch (e){
            console.log(e)
        }
    },

    async GetAllAnimalsEndangered(req, res){
        try {
            const result = await AnimalsService.GetAllAnimalsEndangered()
            res.status(200).json(result)
        }
        catch (e) {
            console.error(e)
        }
    },

    async GetAllAnimalsInHabitat(req, res){
        const habitat = req.params.habitat

        try{
            const result = await AnimalsService.GetAllAnimalsInHabitat(habitat)

            res.status(200).json(result)
        }
        catch (e) {
            console.error(e)
        }
    },

    async PostNewAnimal(req, res){
        const newAnimal = req.body

        try {
            const result = await AnimalsService.PostNewAnimal(newAnimal)

            res.status(200).json(result)
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default ZooController