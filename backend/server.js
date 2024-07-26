const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/authors', (req, res) => {
  const { name, quote } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).json({ error: 'Name must be at least 3 characters long.' });
  }
  if (!quote || quote.length < 3) {
    return res.status(400).json({ error: 'Quote must be at least 3 characters long.' });
  }

  // Lógica para guardar el autor
  res.status(201).json({ message: 'Author created successfully!' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
