const books = document.querySelector(".books")
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')

let bookID = 0;
function addBook(book) {
    
    let div = document.createElement('div');
    div.innerHTML = book.title
    div.id = bookID++;
    div.className = 'book'
    myLibrary.push(div);

    for(let i = 0; i < myLibrary.length; i++) {
        books.append(myLibrary[i])
    }
     
}
btn.addEventListener('click', ()=> {
   overlay.classList.add('active')
   popup.classList.add('active')
   let title = "yes"
   let author = "yes"
   let pages = "yes"
   let read= "yes"
   book = new Book(title, author, pages, read)
   addBook(book)
})


const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function addBookToLibrary(Book) {
    myLibrary.push(book)
}
