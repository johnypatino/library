const books = document.querySelector(".books")
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const form = document.querySelector('#form')
const myLibrary = []
const exit = document.querySelector('#exit')


let bookID = 0;
function addBook(book) {
    
    let div = document.createElement('div');
    div.innerHTML = `Title: ${book.title} <br> Author: ${book.author} <br> Pages: ${book.pages} <br> Read: ${book.read}` ;
    div.id = bookID++;
    div.className = 'book'
    myLibrary.push(div);
    console.log(myLibrary)
    display_books();
    overlay.classList.remove('active')
    popup.classList.remove('active')
     
}
function display_books() {
    for (let i = 0 ; i < myLibrary.length; i++) {
        console.log("yes")
        books.append(myLibrary[i])
    }
}
btn.addEventListener('click', ()=> {
   overlay.classList.add('active')
   popup.classList.add('active')

})
exit.addEventListener('click', () => {
    overlay.classList.remove('active')
   popup.classList.remove('active')
})
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
    form.reset()
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

