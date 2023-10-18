import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetService.js";
import { colonyService } from "../services/ColonyService.js";






export class PlanetController extends BaseController {

    constructor() {
        super('api/planets')
        this.router
            .get('/:planetId/colony', this.getColonyByPlanetId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }


    async getColonyByPlanetId(request, response, next) {


        try {

            const planetId = request.params.planetId
            const colony = await colonyService.getColoniesByPlanetId(planetId)
            return response.send(colony)

        } catch (error) {
            next(error)
        }
    }


    async createPlanet(request, response, next) {


        try {

            const planetData = request.body
            const userInfo = request.userInfo
            planetData.creatorId = userInfo.id
            const planet = await planetService.createPlanet(planetData)
            return response.send(planet)

        } catch (error) {
            next(error)
        }
    }
}