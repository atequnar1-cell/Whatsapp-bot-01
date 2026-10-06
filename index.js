const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>WhatsApp Bot is Live!</h1><p>Your bot is deployed successfully on Vercel.</p>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

module.exports = app;
