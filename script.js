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

addBookToLibrary("Thics", "TJ Klune", 456, true);
addBookToLibrary("Dune", "Frank Herbert", 500, false);

function displayBooksinLibrary(){
    myLibrary.forEach(book => {
        console.log(`${book.title}, ${book.author}, ${book.pages}, ${book.read}`);
    });
}

displayBooksinLibrary();