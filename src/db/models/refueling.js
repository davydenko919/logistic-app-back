import mongoose from "mongoose";

const refuelingSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    truck: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    gasStation : {
        type: String,
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
       driverId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
      },

},
{
    timestamps: true
}
);

const Refueling = mongoose.model("Refueling", refuelingSchema);
export {Refueling};
