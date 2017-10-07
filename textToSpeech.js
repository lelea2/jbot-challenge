const TJBot = require('tjbot');
require('dotenv').config();

const tj = new TJBot(
  ["speaker"],
  {
    robot: {
      gender: "female"
    },
    speak: {
      language: "en-US"
    }
  },
  {
    text_to_speech: {
      username: process.env.TEXT_TO_SPEECH_USERNAME,
      password: process.env.TEXT_TO_SPEECH_PASSWORD
    }
  }
);

tj.speak('Kindred spirits are not so scarce as I used to think. It\'s splendid to find out there are so many of them in the world.');
