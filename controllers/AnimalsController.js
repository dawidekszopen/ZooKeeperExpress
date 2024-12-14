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

    async GetAllAnimalsSpecies(req, res){
        const species = req.query.species

        try{
            const result = await AnimalsService.GetAllAnimalsSpecies(species)

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
    },

    async UpdateNewAnimal(req, res){
        const id = req.params.id
        const UpdatedAnimal = req.body

        try {
            const result = await AnimalsService.UpdateNewAnimal(id, UpdatedAnimal)

            res.status(200).json(result)
        }
        catch (e) {
            console.error(e)
        }
    },

    async DeleteAnimal(req, res){
        const id = req.params.id

        try {
            const result = await AnimalsService.DeleteAnimal(id)

            res.status(200).json(result)
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default ZooController