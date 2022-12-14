const express = require('express');
const app = express();
const port = 3003;

app.get('/books', (req, res) => {
  const books = [
    {
      id: 1,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'asdf',
      progress: '20',
    },
    {
      id: 2,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'asdf',
      progress: '30',
    },
    {
      id: 3,
      name: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      description: 'asdf',
      progress: '90',
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
