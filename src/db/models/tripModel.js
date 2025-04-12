import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    truckTrip: {
        type: String,
        required: true,
    },
    startTrip: {
        type: Number,
        required: true,
    },
    endTrip: {
        type: Number,
        required: true,
    },
    elengthTrip: {
        type: Number,
        required: true,
    },
    weigth: {
        type: Number,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },

},
{
    timestamps: true
}
);

const TripModel = mongoose.model("TripModel", tripSchema);
export {TripModel};
