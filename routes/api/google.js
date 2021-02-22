const router = require("express").Router();
// const googleController = require("../../controllers/googleController");
const axios = require("axios");

// Matches with "/api/google/:title"
router.route("/:title").get((req, res) => {
  const query =
    "https://books.googleapis.com/books/v1/volumes?q=" + req.params.title;
  console.log(query);
  axios
    .get(query)
    .then((results) => {
      res.json(results.data);
    })
    .catch((err) => {
      res.status(422).json(err);
      console.log(err);
    });
});

module.exports = router;
