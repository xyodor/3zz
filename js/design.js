// Navbar Functions
let navbar = document.querySelector("nav#main"),
    navspan = document.querySelector("nav#main > div.flex > div.top > span > span"),
    books = document.querySelector("nav#main > div.flex > div.top > p:first-of-type"),
    articals = document.querySelector("nav#main > div.flex > div.top > p:last-of-type"),
    books_section = document.querySelector("main > div.page > div.body > section.books"),
    articals_section = document.querySelector("main > div.page > div.body > section.articals");
    console.log(articals_section, books_section);


    navspan.addEventListener("click", () => {
        navbar.classList.toggle("navActive");
        navspan.classList.toggle("spanActive");
    })

    books.addEventListener("click", () => {
        articals_section.style.display = "none";
        books_section.style.display = "block";
    })

    articals.addEventListener("click", () => {
        books_section.style.display = "none";
        articals_section.style.display = "block";
    })
// Navbar Functions