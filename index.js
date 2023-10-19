const books = document.querySelector(".books")
const btn = document.querySelector('button')

let bookID = 0;
function addBook() {
    let div = document.createElement('div');
    div.id = bookID++;
    div.className = 'book'
    myLibrary.push(div);
    if (myLibrary.length > 5) {
        
    }
    for(let i = 0; i < myLibrary.length; i++) {
        books.append(myLibrary[i])
    }
     
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
