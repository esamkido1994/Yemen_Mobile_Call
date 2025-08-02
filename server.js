const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// توفير الملفات الثابتة (html, css, js)
app.use(express.static(path.join(__dirname)));

// جميع الطلبات ترجع index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});