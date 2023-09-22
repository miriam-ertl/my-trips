import Trip from "@/db/models/Trip.js";
import connect from "@/db/connect.js";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const trips = await Trip.find({})
      .sort({ createdAt: -1 })
      .limit(request.query.limit);
    return response.status(200).json(trips);
  }

  if (request.method === "POST") {
    try {
      const tripData = request.body;
      await Trip.create(tripData);
      return response.status(201).json({ status: "Trip created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }

  response.status(405).json({
    message:
      "...Ooops, something went wrong. You cannot access your list of trips",
  });
}
