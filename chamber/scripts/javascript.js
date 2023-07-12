// JS for nav button
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu();

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

// JS for date elements
let date = new Date();
let longDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
let year = date.getFullYear();

// document.querySelector('#year').textContent = longDate;
// document.getElementById("year").textContent = year;

//JS for last modified
let lastMod = document.lastModified;
document.getElementById("lastMod").textContent = lastMod;

//JS for loading images
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                obersver.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
