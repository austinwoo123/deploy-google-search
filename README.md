# Deploy-google-search
## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
In this project, I created a new React-based Google Books Search app. This project implemented React components, worked with helper/util functions, and utilized React lifecycle methods to query and display books based on user searches. I also used Node, Express and MongoDB so that users can save books to review or purchase later.


-----------------------
## Deployed Link
[Link to Deployed Site](https://ancient-peak-31427.herokuapp.com/)

-----------------------
## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Install dependencies
5. Type "npm start"
-----------------------
## Code Snippets
```
var router = require("express").Router();
var Book = require("../../models/Book")
var bookGet;

// Get all saved books as json
router.get("/api/Book", (req, res) => {
  Book.find({})
  .sort()
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Save new books to database
router.post("/api/Book/", ({ body }, res) => {
  Book.insert(body)
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

// Delete books from database by mongo _id
router.delete("/api/Book/:id", ({ body }, res) => {
  Book.deleteOne(body)
  .then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})


// * get everything upon page load. go through mongoose and retrieve everything

module.exports = router;

```
This code shows the different routes we needed to create in order to send information to the mongoDb database. We used router.get and router.delete to retrieve all books and to delete specific books.
 
-----------------------
## Built With
- Bootstrap
- Javascript
- HTML/CSS
- jQuery
- Font Awesome
- React
- Mongoose
- Node

-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo


-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp