var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');


router.get('/', usersController.list);
router.get('/:userId', usersController.getUser, usersController.sendById);
router.post('/', usersController.create);
router.put('/:userId', usersController.update);
router.delete('/:userId', usersController.remove)

module.exports = router;