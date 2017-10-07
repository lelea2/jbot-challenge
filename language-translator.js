const TJBot = require('tjbot');

var tj = new TJBot([], {}, {
  language_translator: {
    "username": "995fe011-99d2-4343-b160-be75cf76e1cd",
    "password": "DDpOYupDwCxT"
  }
});

tj.translate("This is awesome", "en", "fr")
  .then((response) => {
    console.log(response.translations[0].translation)
  });
