const sql = require('mssql')

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME
}

module.exports = {
  async exec(query){
    await sql.connect(config)
    const request = new sql.Request()
    return await (await request.query(query)).recordset
  }
}