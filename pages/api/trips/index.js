import Trip from "@/db/models/Trip.js";
import connect from "@/db/connect.js";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const trips = await Trip.find({})
      .sort({ createdAt: -1 })
      .limit(request.query.limit);
    //console.log(trips);
    return response.status(200).json(trips);
  } else {
    return response.status(405).json({
      message:
        "...Ooops, something went wrong. You cannot access your list of trips",
    });
  }
}
