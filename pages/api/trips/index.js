import Trip from "@/db/models/Trip";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const trips = await Trip.find();
    console.log(trips);
    return response.status(200).json(trips);
  } else {
    return response.status(405).json({ message: "something went wrong" });
  }
}
