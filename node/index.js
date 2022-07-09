const express = require('express')

const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql2')


app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)

  const createPeople = `INSERT INTO people(name) values('Lorena')`
  connection.query(createPeople)
  const findPeople = `SELECT name FROM people`

  connection.query(findPeople, (error, result) => {
    if (error) throw error

    const html = `<h1>Full Cycle Rocks!</h1>${result.map(person => ` ${person.name}`)}`

    res.send(html)
  })
  connection.end()
})

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})
