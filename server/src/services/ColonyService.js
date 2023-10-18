import { dbContext } from "../db/DbContext.js"





class ColonyService {

    async getColoniesByPlanetId(planetIdFromParameter) {

        const colonies = await dbContext.Colonies.find({ planetId: planetIdFromParameter })
        return colonies

    }


    async createColony(colonyData) {
        const colony = await dbContext.Colonies.create(colonyData)
        return colony
    }
}

export const colonyService = new ColonyService()