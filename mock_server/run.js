const express = require('express');
const app = express();
const port = 3003;

app.get('/books', (req, res) => {
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: 3,
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
    },
  ];

  res.send(books);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Mock booktracker backend app listening on port ${port}`);
});
