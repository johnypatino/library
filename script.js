let myLibrary = [];

function Book(title, author, pages, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function() {
    return this.title + this.author + this.pages + this.read;
}
function addBookToLibrary() {
    title = prompt('Title:');
    author = prompt('Author:');
    pages = prompt('Pages:');
    read = prompt('Have you read it?');
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    libraryLoop();
    
}
function libraryLoop() {
for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.textContent = myLibrary[i].info();
    container.append(div);
}
}

let button = document.querySelector('button');
button.addEventListener('click', ()=> {
    addBookToLibrary();
})