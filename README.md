## Our Project: My Trips

Team: [Bonnie](https://github.com/B-Baumeister), [Miriam](https://github.com/miriam-ertl), [David](https://github.com/DaveKrauss), [Stephan](https://github.com/StephanBergmann)

My Trips is a personal App, designed for frequent travellers to plan, customize and keep track about their journeys. The app provides features as: creating a trip with a start and end date, adding a description and a personal picture - as well as an individual packing list for each trip - to make planning even easier!

![Screenshots](/public/image/mytrips.png)

## Demo

You can find the hosted version on [Vercel](https://my-trips-weld-sigma.vercel.app/)
**Important the project is optimized for mobile screen.**

## Included Tech Stack

- React
- Next.js
- Node.js
- JavaScript
- Styled Components
- useSWR
- Date-fns
- mongoose
- MongoDB Atlas
- Cloudinary

## How to Setup?

- Clone this repository
- Install all dependencies with `npm i`
- Create a `MongoDB account` and follow this instruction:
  - Create a collection and copy the schema from the db/models/Trip.js
  - Create a .env.local file at the root of your project with the following content:
    `MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-name>/<example-database>?retryWrites=true&w=majority`
  - `user` is the name of the database user you have created in the MongoDB Atlas interface
  - `password` is the password you have chosen for this user
  - `cluster-name` is the name of your cluster: this value can vary and will look something like `cluster0.mu12zrz.mongodb.net.`
  - `example-database` is the name of your database
  - Replace the placeholders, including the `<` and `>` characters, with the actual values
  - Install `npm i mongoose`
    <br></br>
- Create a `Cloudinary account` and follow this instruction:
  - If you are signed up in Cloudinary note down the Cloud Name from the console
  - Then go to the `settings` page, into the `Upload` section and edit the ml_default signing mode to `Unsigned`
  - Inside your `.env.local` file add the following content: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<cloudname>`
  - Install `npm i cloudinary`
