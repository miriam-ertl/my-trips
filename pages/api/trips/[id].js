import Trip from "@/db/models/Trip.js";
import connect from "@/db/connect.js";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const trip = await Trip.findById(request.query.id);
    response.status(200).json(trip);
    return;
  }
}
