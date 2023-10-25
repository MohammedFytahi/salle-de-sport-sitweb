const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navbar_links");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})
