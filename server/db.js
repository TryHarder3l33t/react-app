const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/create_react_app"
);

const init = async () => {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

init();
