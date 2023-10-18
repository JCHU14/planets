import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { colonyService } from "../services/ColonyService.js"







export class ColonyController extends BaseController {

    constructor() {
        super('api/colonies')
        this.router
            .get('/:colonyId/species', this.getSpeciesByColonyId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createColony)
    }


    async getSpeciesByColonyId(request, response, next) {


        try {

            const colonyId = request.params.colonyId
            const species = await speciesService.getSpeciesByColonyId(ColonyId)
            return response.send(species)

        } catch (error) {
            next(error)
        }
    }


    async createColony(request, response, next) {


        try {

            const colonyData = request.body
            const userInfo = request.userInfo
            colonyData.creatorId = userInfo.id
            const colony = await colonyService.createColony(colonyData)
            return response.send(colony)

        } catch (error) {
            next(error)
        }
    }
}