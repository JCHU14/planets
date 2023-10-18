import { dbContext } from "../db/DbContext.js";




class PlanetService {

    async getPlanetsByGalaxyId(galaxyIdFromParameter) {

        const planets = await dbContext.Planets.find({ galaxyId: galaxyIdFromParameter })
        return planets

    }


    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }
}

export const planetService = new PlanetService()