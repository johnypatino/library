const books = document.querySelector(".books")
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const form = document.querySelector('#form')



let bookID = 0;
function addBook(book) {
    
    let div = document.createElement('div');
    div.innerHTML = `Title: ${book.title} <br> Author: ${book.author} <br> Pages: ${book.pages} <br> Read: ${book.read}` ;
    div.id = bookID++;
    div.className = 'book'
    myLibrary.push(div);

    for(let i = 0; i < myLibrary.length; i++) {
        books.append(myLibrary[i])
    }
    overlay.classList.remove('active')
    popup.classList.remove('active')
     
}
btn.addEventListener('click', ()=> {

   overlay.classList.add('active')
   popup.classList.add('active')
   form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title")
    let author = document.getElementById("author")
    let pages = document.getElementById("pages")
    let read = document.getElementById("read")
    if (read.value == 'on') {
        read = true
    }
    else {
        read = false
    }
    book = new Book(title.value, author.value, pages.value, read)
    addBook(book)
    })
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
