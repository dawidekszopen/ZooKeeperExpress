import fsPromises from 'fs/promises'
import path from 'path'

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
    }
}

export default ZooService