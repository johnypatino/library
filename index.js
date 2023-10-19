const books = document.querySelector(".books")
const btn = document.querySelector('button')


function addBook() {
    let div = document.createElement('div');
    div.className = 'book'
    books.append(div);
}
btn.addEventListener('click', ()=> {
    addBook();
})


const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function addBookToLibrary(book) {
    myLibrary.push(book)
}
