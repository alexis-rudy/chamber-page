// JS for nav button
let toggleMenu = function(){
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");

    // console.log("method finished");
}
const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;
