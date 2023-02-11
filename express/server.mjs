import express from 'express';
import morgan from 'morgan';
import bp from 'body-parser';

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan('dev'));

const db = {
  todos: []
};
const { todos } = db;

app.post('/todo', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  };

  todos.push(newTodo);
  res.json(newTodo);
});
app.get('/todo', (req, res) => {
  res.json(db);
});

//dynamic routing
app.get('/todo/:id', (req, res) => {
  const todo = todos.find(t => t.id === +req.params.id);
  res.json({ data: todo });
});

app.listen(9999, () => {
  console.log(`running on http://localhost:9999`);
});
