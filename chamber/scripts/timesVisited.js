const visitsDisplay = document.querySelector("#timesVisited");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 1;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);