const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const routerCards = require('./routes/card.js');
const routerUsers = require('./routes/user.js');
const routerUsersId = require('./routes/userId.js');

app.use('/', routerCards);
app.use('/', routerUsers);
app.use('/', routerUsersId);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

app.use('/', (req, res) => {
  res.status(404).json({message: `Запрашиваемый ресурс не найден`});
});

