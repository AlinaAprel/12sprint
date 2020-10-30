const routerUsersId = require('express').Router();
const fs = require('fs').promises;

routerUsersId.get('/users/:id', (req, res) => {
  fs.readFile('./data/users.json', 'utf-8')
  .then((data) => {
    const users = JSON.parse(data);
    const userId = users.find((item) => item._id === req.params.id);
    res.status(200).json(userId)

  })
  .then ((err) => {
    res.status(404).json({ message: `Нет пользователя с таким id, ошибка ${err}` });
  })
  .then ((err) => {
    res.status(500).json({ message: `Ошибка при чтении файла: ${err}` });
  })
})

module.exports = routerUsersId;
