import fsPromises from 'fs/promises'
import path from 'path'
import {json} from "express";

const filePath = path.resolve("data", "zoo.json")

const ZooService = {
    async GetAnimals(){
        console.log("service")
        try {
            const data = await fsPromises.readFile(filePath, "utf-8")
            return JSON.parse(data)
        }
        catch (e) {
            console.log(e)
        }
    },

    async GetAllAnimalsEndangered(){
        const animals = await this.GetAnimals()

        let EndageredAnimals = [];

        for(let i = 0; i < animals.length; i++){
            if(animals[i]["isEndangered"]){
                console.log(animals[i])
                EndageredAnimals.push(animals[i])
            }
        }

        return JSON.parse(JSON.stringify(EndageredAnimals))
    },

    async GetAllAnimalsInHabitat(habitat){
        try {
            const animals = await this.GetAnimals()

            console.log(habitat)

            let HabitatAnimals = [];


            for(let i = 0; i < animals.length; i++){
                if(animals[i]["habitat"] === habitat){
                    console.log(animals[i])
                    HabitatAnimals.push(animals[i])
                }
            }

            return JSON.parse(JSON.stringify(HabitatAnimals))
        }
        catch (e) {
            console.error(e)
        }

    },

    async GetAllAnimalsSpecies(species){
        try {
            const animals = await this.GetAnimals()

            console.log(species)

            let SpeciesAnimals = [];


            for(let i = 0; i < animals.length; i++){
                if(animals[i]["species"] === species){
                    console.log(animals[i])
                    SpeciesAnimals.push(animals[i])
                }
            }

            return JSON.parse(JSON.stringify(SpeciesAnimals))
        }
        catch (e) {
            console.error(e)
        }

    },

    async PostNewAnimal(NewAnimal){

        try {
            const animals = await this.GetAnimals()

            animals.push(NewAnimal)

            fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), "utf-8")

            return {message: "dodano nowe zwierzę!!!!"}
        }
        catch (e) {
            console.error(e)
        }

    },

    async UpdateNewAnimal(id, UpdatedAnimal){
        try{
            let animals = await this.GetAnimals()

            const animalId = animals.findIndex(animal => animal.id === parseInt(id))

            if(animalId === -1){
                console.error(`nie znaleziono zwierzaka ${id}`)
            }

            animals[animalId] = {...animals[animalId], ...UpdatedAnimal}

            await fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), "utf-8")

            return {message: "dodano zaaktualizowano zwierzaka!!!!"}
        }
        catch (e) {
            console.error(e)

        }
    },

    async DeleteAnimal(id){
        try{
            let animals = await this.GetAnimals()

            const animalId = animals.findIndex(animal => animal.id === parseInt(id))

            if(animalId === -1){
                console.error(`nie znaleziono zwierzaka ${id}`)
            }

            animals.splice(animalId, 1)

            await fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), "utf-8")

            return {message: "usunięto zwierzaka!!!! :C"}
        }
        catch (e) {
            console.error(e)

        }
    }
}

export default ZooService