const axios = require("axios");

module.exports = {
  searchBook: function (req, res) {
    const query =
      "https://books.googleapis.com/books/v1/volumes?q=" + req.params.title;
    console.log(query);
    return axios
      .get(query)
      .then((books) => {
        res.json(books);
      })
      .catch((err) => res.status(422).json(err));
  },
};
