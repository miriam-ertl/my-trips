import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const tripSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    image: {
      type: new Schema({
        width: Number,
        height: Number,
        url: String,
      }),
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    packingList: [
      {
        name: { type: String, required: true },
        checked: { type: Boolean },
      },
    ],
  },
  { timestamps: true }
);

const Trip = models?.Trip || model("Trip", tripSchema);
export default Trip;
