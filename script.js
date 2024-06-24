const form = document.getElementById("form");
form.addEventListener("submit", addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("is-read").checked;

    if (title === "" || author === "" || pages === "") return;

    myLibrary.push(new Book(title, author, pages, isRead));
    updateLibrary();
}

function updateLibrary() {
    const collection = document.querySelector(".book-collection");
    collection.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.read ? "has" : "not"} read</p>
            <button class="remove">X</button>
        `;
        collection.appendChild(bookDiv);

        bookDiv.querySelector(".remove").addEventListener("click", () => {
            myLibrary.splice(index, 1);
            updateLibrary();
        });
    });
}

pages.oninput = function () {
    if (pages.value <= 0) {
        pages.value = "";
    }
};

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
myLibrary.push(
    new Book("Percy Jackson: The Lightning Thief", "Rick Riordan", 416, true)
);

updateLibrary();
