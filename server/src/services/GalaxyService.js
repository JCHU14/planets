import { dbContext } from "../db/DbContext.js";




class GalaxyService {

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        await galaxy.populate('creator')
        return galaxy
    }

    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find().populate('creator')
        return galaxies
    }
}

export const galaxyService = new GalaxyService()