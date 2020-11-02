const routerUsersId = require('express').Router();
const fs = require('fs').promises;

routerUsersId.get('/users/:id', (req, res, err) => {
  fs.readFile('./data/users.json', 'utf-8')
  .then((data) => {
    const users = JSON.parse(data);
    const userId = users.find((item) => item._id === req.params.id);
    if(!userId) {
      res.status(404).json({message: `Нет пользователя с таким id`})
      return;
    } else {
      res.status(200).json(userId)
    }
  })
})


module.exports = routerUsersId;
