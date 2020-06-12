const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
const dataContainer = require("./data.json");

//get all jobs
app.get("/getQuestions", (req, res) => {
  if (dataContainer.questions) {
    res.send(dataContainer.questions);
  }
});

//get all jobs
app.get("/getQuestionsCount", (req, res) => {
  if (dataContainer.questions.length) {
    res.send(dataContainer.questions.length);
  }
});

//get results
app.get("/getResult", (req, res) => {
  const totalResult = dataContainer.questions.reduce((acc, question) => {
    return acc + question.answer;
  }, 0);
  const average = totalResult / dataContainer.questions.length;
  if (average >= 3) {
    res.send(dataContainer.riskLevels[0]);
  } else if (average >= 1.5) {
    res.send(dataContainer.riskLevels[1]);
  } else {
    res.send(dataContainer.riskLevels[2]);
  }
});

//get single job
app.get("/getAQuestion/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = dataContainer.questions.find((item) => item.id === id);
  if (id === dataContainer.questions.length) {
    return res.json({ item, status: "finished" });
  }
  return res.json({ item });
});

//set answer
app.put("/setAnswer/:id/:chosen", (req, res) => {
  const id = parseInt(req.params.id);
  const answer = parseInt(req.params.chosen);
  const editedQuestions = dataContainer.questions.map((question) => {
    return question.id === id ? { ...question, answer } : question;
  });
  dataContainer.questions = editedQuestions.map((e) => Object.assign({}, e));
  res.json({ state: true });
});

//remove answers
app.get("/removeAnswers", (req, res) => {
  const editedQuestions = dataContainer.questions.map((question) => {
    return { ...question, answer: -1 };
  });
  dataContainer.questions = editedQuestions.map((e) => Object.assign({}, e));
  res.json({ state: true });
});

app.listen(port, () => console.log("listening on port 3001"));
