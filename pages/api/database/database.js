//const { Sequelize } = require("sequelize");
//require("dotenv").config();
const conectar = new Sequelize(
  `d3ta08t1ncvui2`,
  `ybgawrxvstjyve`,
  `a0baaf491f427234ef81d0d48d3d1e1ff57fd12c114ed64de1d6c7285680befe`,
  {
    host: `ec2-54-196-33-23.compute-1.amazonaws.com`,
    dialect: "postgres",

    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);
module.exports = conectar;