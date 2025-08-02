const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// تقديم الملفات الثابتة من مجلد public (نحتاج تنقل ملف html هنا)
app.use(express.static(path.join(__dirname, 'public')));

// إذا فتحت الروت الأساسي يرسل ملف index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});