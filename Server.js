const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Sample book data
let books = [
    { id: 1, title: "1984", author: "George Orwell", price: 15 },
    { id: 2, title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 18 },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho", price: 12 }
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Home Page - Book List
app.get("/", (req, res) => {
    res.render("index", { books });
});

// Book Details
app.get("/book/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) {
        return res.status(404).send("Book not found.");
    }
    res.render("book", { book });
});

// Add New Book Form
app.get("/add-book", (req, res) => {
    res.render("add-book");
});

// Add New Book (POST)
app.post("/add-book", (req, res) => {
    const { title, author, price } = req.body;
    const newBook = { id: books.length + 1, title, author, price: parseFloat(price) };
    books.push(newBook);
    res.redirect("/");
});

// Start Server
app.listen(PORT, () => {
    console.log(`📚 Bookstore is running on port ${PORT}...`);
});
