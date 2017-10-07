const TJBot = require('tjbot');

var tj = new TJBot(
  ['camera'],
  {},
  {
    visual_recognition: {
      api_key: process.env.VISUAL_RECOGNITION_API_KEY
    }
  }
);

tj.see(objects => {
  console.log(objects);
});
