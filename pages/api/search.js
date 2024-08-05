import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { q } = req.query;
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db("mydatabase");
  const results = await db
    .collection("uploads")
    .find({ originalname: { $regex: q, $options: "i" } })
    .toArray();
  res.status(200).json({ results });
  client.close();
}
