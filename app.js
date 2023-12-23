const libraryList = document.getElementById("library-list");

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBook(){
    const bTitle = document.getElementById("book-title");
    const bAuthor = document.getElementById("book-author");
    const book = new Book(bTitle.value,bAuthor.value);

    let tmp = document.createElement("li");
    tmp.innerText = book.title + " by " + book.author + " ";
    let tmpBtn = document.createElement("button");
    tmpBtn.innerText = "Delete";
    tmpBtn.onclick = function(){return this.parentNode.remove();}
    tmp.appendChild(tmpBtn);
    libraryList.appendChild(tmp);
}