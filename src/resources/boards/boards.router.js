const router = require('express').Router();
// const Task = require('./boards.model');
// const taskService = require('./boards.service');

router.route('/').post(async (req, res) => {
  const result = await req.body;
  console.log(result);
  res.status(201).send(result);
})

module.exports = router;
