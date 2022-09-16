//const { DataTypes } = require("sequelize");
const conectar = require("./database");
const post = conectar.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
post
  .sync({ force: false })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
module.exports = post;