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
const express = require('express');
const app = express();

app.use(express.json());

// Home Page
app.get('/', (req, res) => {
  res.send('<h1>WhatsApp Bot is Live! 🤖</h1><p>AFTEAM00 Auto-Reply Bot is Ready! ✅</p><p>Use /auto-reply to test</p>');
});

// AUTO-REPLY LOGIC - YE ASAL KAAM KAREGA
app.post('/auto-reply', (req, res) => {
  const userMessage = (req.body.message || '').toLowerCase();
  let reply = '';

  if (userMessage.includes('hi') || userMessage.includes('hello') || userMessage.includes('salam')) {
    reply = 'Assalam-o-Alaikum! 👋 Welcome to AFTEAM00!\n\nServices:\n1. WhatsApp Bot\n2. Web Development\n\nKis me help chahiye?';
  } else if (userMessage.includes('price') || userMessage.includes('rate') || userMessage.includes('package')) {
    reply = '💰 *AFTEAM00 Packages:*\n\nBasic Bot - 3000 PKR\nPro Bot - 5000 PKR\n24/7 Hosting FREE ✅\n\nContact: wa.me/923XXXXXXXXX';
  } else if (userMessage.includes('bot')) {
    reply = '🤖 Ji han! Hum Professional WhatsApp Auto-Reply Bot banate hain. Demo dekhna hai?';
  } else {
    reply = 'Thanks for messaging AFTEAM00! 🙏\nHamari team jald rabta karegi.\n\nVisit: https://atequnar1-cell.github.io/Af_mir_team-01/';
  }

  res.json({ autoReply: reply });
});

// TEST ke liye GET wala bhi
app.get('/auto-reply', (req, res) => {
  const msg = (req.query.message || '').toLowerCase();
  let reply = 'Thanks for messaging AFTEAM00! 🙏';
  if (msg.includes('hi') || msg.includes('salam')) reply = 'Walaikum Salam! AFTEAM00 me Khush Amdeed! 👋';
  if (msg.includes('price')) reply = 'Basic Bot 3000 PKR, Pro Bot 5000 PKR 💰';
  res.json({ yourMessage: msg, autoReply: reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

module.exports = app;