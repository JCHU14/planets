import { Schema } from "mongoose";





export const PlanetSchema = new Schema(


    {
        name: { type: String, required: true, maxLength: 25 },
        galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
        atmosphere: { type: Boolean, required: true },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },

    {
        timestamps: true,
        toJSON: { virtuals: true }
    }

)