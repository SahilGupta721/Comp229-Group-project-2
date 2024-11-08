var express = require('express');
var router = express.Router();

let questionsController = require('../controllers/questions');
let authController = require('../controllers/auth');

router.get('/:adId', questionsController.list);
router.post('/create/:adId', questionsController.createQuestion); // No authentication required for creating questions
router.get('/get/:questionId', questionsController.getQuestion, questionsController.sendById);
router.put('/edit/:questionId', authController.requireSignin, questionsController.update); // Authentication required for answering questions
router.delete('/delete/:questionId', authController.requireSignin, questionsController.remove); // Optional, if needed

module.exports = router;
