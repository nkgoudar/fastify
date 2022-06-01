const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { sequelize } = require("../db");

class User extends Model {
  getFullname() {
    return [this.firstname, this.lastname].join(" ");
  }
}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: sequelize,
  }
);

User.sync()
  .then((d) => {
    console.log("User table synced: ", d);
  })
  .catch((e) => {
    console.log("User table sync error: ", e);
  });

// `sequelize.define` also returns the model
// console.log(")(()()()()()()()",User === sequelize.models.User); // true

module.exports = User;
