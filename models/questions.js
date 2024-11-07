const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionTxt: String,
    answerTxt: String,
    createdAt: Date
})

module.exports = mongoose.model('Question', QuestionSchema);