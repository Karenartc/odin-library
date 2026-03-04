const form = document.querySelector('#bookForm');
const bookTitleInput = document.querySelector('#bookTitle');
const bookAuthorInput = document.querySelector('#bookAuthor');
const bookPagesInput= document.querySelector('#bookPages');
const bookHaveReadInput = document.querySelector('#bookHaveRead');

const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === true ? 'read' : 'not read yet';
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    return myLibrary.push(newBook);
}

function displayBooksinLibrary(){
    myLibrary.forEach(book => {
        console.log(`${book.title}, ${book.author}, ${book.pages}, ${book.read}`);
    });
}

addBookToLibrary("Thics", "TJ Klune", 456, true);
addBookToLibrary("Dune", "Frank Herbert", 500, false);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = bookTitleInput.value;
    const bookAuthor = bookAuthorInput.value;
    const bookPages = Number(bookPagesInput.value);
    const bookHaveRead = bookHaveReadInput.checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookHaveRead);
    displayBooksinLibrary();

    form.reset();
});



