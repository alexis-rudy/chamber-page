let date = new Date();
let longDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
let year = date.getFullYear();

document.getElementById("year").textContent = year;

//JS for last modified
let lastMod = document.lastModified;
document.getElementById("lastMod").textContent = lastMod;