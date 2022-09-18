// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const posts = require("./database/posts");
export default async function handler(req, res) {
  try {
    await posts.destroy({ truncate: true });
    res.status(200).json({ status: "ok" });
  } catch (e) {
    res.status(501).json({ name: "error" + e });
  }
}
