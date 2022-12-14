const posts = require("./database/posts");
export default async function pots(req, res) {
  console.log("alguma requisicao feita do tipo: ", req.method);

  if (req.method == "GET") {
    try {
      if (req.query.id) {
        let result = await show(req.query.id);
        res.status(200).json({
          result,
        });
      } else {
        let result = await listar();
        res.status(200).json({
          result,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        status: "error",
        message: `${e}`,
      });
    }
  } else if (req.method == "POST") {
    const { img, title, description, created_at, updated_at } = req.body;

    try {
      let result = await add(img, title, description, created_at, updated_at);
      console.log("deuuuuuuuu certoooo");
      res.status(200).json({
        status: "ok",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        status: "error",
        message: `${e}`,
      });
    }
  } else if (req.method == "PATH") {
  }
}
const listar = async () => {
  try {
    const dados = await posts.findAll({
      raw: true,
      order: [["createdAt", "DESC"]],
    });
    return dados;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
const show = async (id) => {
  console.log("listandooo" + id);
  try {
    const dados = await posts.findByPk(id);
    console.log("||||||||| ");
    console.log(dados);
    return dados;
  } catch (err) {
    throw new Error(err);
  }
};
const add = async (img, title, description, create_at, update_at) => {
  try {
    console.log(img.length);
    const dados = await posts.create({
      img,
      title,
      description,
      create_at,
      update_at,
    });
    return dados;
  } catch (err) {
    throw err;
  }
};
