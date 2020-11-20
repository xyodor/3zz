// Navbar Functions
let navbar = document.querySelector("nav#main"),
    navspan = document.querySelector("nav#main > div.flex > div.top > span > span"),
    books = document.querySelector("nav#main > div.flex > div.top > p:first-of-type"),
    articals = document.querySelector("nav#main > div.flex > div.top > p:last-of-type"),
    // Articale Title Temp usage
    article = Array.from(document.querySelectorAll("section#articals > article > section.body > header > h2 > a")),
    // 
    books_section = document.getElementById("books"),
    articals_section = document.getElementById("articals"),
    article_section = document.getElementById("article"),
    main_page = document.querySelector("main > div.page"),
    url_patern = /(#\w+)+/gi,
    last_scrolling_possition = 0;

    function url_parser(add) {
        if (location.href.search(url_patern) != -1) {
            window.location.href = window.location.href.replace(url_patern, add);
        }else {
            location.href += add;
        }
    };


    navspan.addEventListener("click", () => {
        // navbar.classList.toggle("navActive");
        // navspan.classList.toggle("spanActive");

        let bottom_value = navbar.style.bottom;
        if (bottom_value == "-36px") {
            navbar.style.bottom = "0px";
            navspan.classList.toggle("spanActive");
        }
        if (bottom_value == "0px") {
            navbar.style.bottom = "-36px";
            navspan.classList.toggle("spanActive");
        }
        if (bottom_value == "-68px") {
            navbar.style.bottom = "-36px";
            navspan.classList.remove("spanFixed")
        }
        
        
        
    })

    books.addEventListener("click", () => {
        url_parser("#books");
        books_section.style.display = "block";
        articals_section.style.display = "none";
        article_section.style.display = "none";
    })

    articals.addEventListener("click", () => {
        url_parser("#articals");
        books_section.style.display = "none";
        articals_section.style.display = "block";
        article_section.style.display = "none";
    })
    article.forEach((b) => {
        b.addEventListener("click", () => {
            url_parser("#article");
            books_section.style.display = "none";
            articals_section.style.display = "none";
            article_section.style.display = "block";
        })
    })
// Navbar Functions

// Main Page Functions
let main_div = window.location.href.search("#articals");

if (main_div != -1) {
    books_section.style.display = "none";
    articals_section.style.display = "block";
}



main_page.addEventListener("scroll", scro => {
    let nav_bottom = navbar.style.bottom;
    if (main_page.scrollTop >= last_scrolling_possition && nav_bottom == "-36px") {
        navbar.style.bottom = "-68px";
        navspan.classList.add("spanFixed");
    }
    if (main_page.scrollTop < last_scrolling_possition && nav_bottom == "-68px") {
        navbar.style.bottom = "-36px";
        navspan.classList.remove("spanFixed");
    }
    if (main_page.clientHeight + main_page.scrollTop >= main_page.scrollHeight) {
        main_page.scrollTop -= 1;
    }
    last_scrolling_possition = main_page.scrollTop;
})



console.log();


// Main Page Functions