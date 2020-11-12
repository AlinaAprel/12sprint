const routerUsers = require('express').Router();
const fs = require('fs').promises;

routerUsers.get('/users', (req, res) => {
  fs.readFile('./data/users.json', 'utf-8')
  .then (data => {
    data = JSON.parse(data);
    res.status(200).json(data)
  })
  .catch (err => {
    res.status(404).json({message: `Ошибка при чтении файла ${err}` })
  })
})

module.exports = routerUsers;