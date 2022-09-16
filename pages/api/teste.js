const posts = require("./database/posts");
export default async function pots(req, res) {
  console.log("alguma requisicao feita do tipo: ", req.method);
  let datas = [
    {
      id: 0,
      title: "bolsas",
      description: "loja cccscscscscscscsccdsaaaaaaaaaaaaaccscccs",
      img: "ds2ds3ad2da",
    },
    {
      id: 1,
      title: "blusa",
      description: "loja cccscscscscscscsccdsaaaaaaaaaaaaaccscccs",
      img: "ds2ds3ad2da",
    },
    {
      id: 2,
      title: "camisa",
      description: "loja cccscscscscscscaaaaaaaaaaaccscccs",
      img: "ds2ds3ad2da",
    },
    {
      id: 3,
      title: "calcas",
      description: "loja cccscscscscscscsccdsaaaccscccs",
      img: "ds2ds3ad2da",
    },
  ];
  if (req.method == "GET") {
    try {
      if (req.query.id) {
        let result = await show(req.query.id);
        return res.status(200).json({
          data: { result },
        });
      } else {
        let result = await listar();
        return res.status(200).json({
          data: result,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  } else if (req.method == "POST") {
    const { img, title, description, created_at, updated_at } = req.body;
    console.log(img.length);
    try {
      let result = await add(img, title, description, created_at, updated_at);
      console.log("deuuuuuuuu certoooo");
      console.log(result);
      return res.status(200).json({
        status: "ok",
      });
    } catch (e) {
      res.status(500).send(e);
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
    throw new Error(err);
  }
};
const show = async (id) => {
  console.log("listandooo");
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
    const dados = await posts.create({
      img,
      title,
      description,
      create_at,
      update_at,
    });
    return dados;
  } catch (err) {
    throw new Error(err);
  }
};
