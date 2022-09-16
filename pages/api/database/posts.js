const { DataTypes } = require("sequelize");
const conectar = require("./database");
const post = conectar.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
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
  .then((e) => {})
  .catch((err) => {
    console.log(err);
  });
module.exports = post;
