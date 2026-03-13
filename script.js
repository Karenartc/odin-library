const form = document.querySelector('#bookForm');
const bookTitleInput = document.querySelector('#bookTitle');
const bookAuthorInput = document.querySelector('#bookAuthor');
const bookPagesInput= document.querySelector('#bookPages');
const bookHaveReadInput = document.querySelector('#bookHaveRead');
const libraryContainer = document.querySelector('.bookCards');

let myLibrary = [];

class Book{
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function createBookCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.dataset.id = book.id;

    const titleCard = document.createElement('h3');
    titleCard.textContent = book.title;
    const authorCard = document.createElement('p');
    authorCard.textContent = book.author;
    const pagesCard = document.createElement('p');
    pagesCard.textContent = book.pages;

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = book.read ? 'read' : 'not read yet';

    toggleReadBtn.classList.add('statusBtn');
    toggleReadBtn.classList.add(book.read ? 'is-read' : 'is-not-read');

    toggleReadBtn.addEventListener('click', (e) => {
        book.toggleRead();
        displayBooksinLibrary();
    });

    const deleteCardBtn = document.createElement('button');
    deleteCardBtn.textContent = 'Delete Book';

    deleteCardBtn.addEventListener('click', (e) => {
        myLibrary = myLibrary.filter(b => b.id !== book.id);
        displayBooksinLibrary();
    });

    bookCard.append(titleCard, authorCard, pagesCard, toggleReadBtn, deleteCardBtn);
    libraryContainer.appendChild(bookCard);
}

function displayBooksinLibrary(){
    libraryContainer.textContent = '';
    myLibrary.forEach(book => createBookCard(book));
}

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