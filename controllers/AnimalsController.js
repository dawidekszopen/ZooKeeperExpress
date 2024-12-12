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
    }
}

export default ZooController