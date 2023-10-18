import { Schema } from "mongoose";




export const ColonySchema = new Schema(


    {
        name: { type: String, required: true, maxLength: 25 },
        planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
        amountOfSpecies: { type: Number, required: true, max: 100000 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },

    {
        timestamps: true,
        toJSON: { virtuals: true }
    }

)