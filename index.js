// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/slack/twinforce', (req, res) => {
  const user = req.body.user_name || 'new hire';
  const text = req.body.text || '';

  const message = `👋 Hi ${user}, I'm TwinForce!
Here’s your onboarding checklist:
- ✅ Fill out HR forms
- 🖥 Set up Slack & email
- 📅 Book your 1:1 with your manager
- 🎥 Watch "Intro to Product" video`;

  return res.json({
    response_type: 'in_channel', // or 'ephemeral' for private replies
    text: message
  });
});

app.get('/', (req, res) => {
  res.send('TwinForce backend is running.');
});

app.listen(PORT, () => {
  console.log(`TwinForce server running on port ${PORT}`);
});
