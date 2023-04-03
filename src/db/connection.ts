import { Sequelize } from "sequelize"

const db = new Sequelize('node', 'root', '5taffSoport3', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;