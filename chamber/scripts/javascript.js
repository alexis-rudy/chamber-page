// JS for date elements
let date = new Date();
let longDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
let year = date.getFullYear();

document.querySelector('#fullDate').textContent = longDate;
document.getElementById("year").textContent = year;


//JS for last modified
let lastMod = document.lastModified;
document.getElementById("lastMod").textContent = lastMod;

// if (date.getDay() == 3){
//     let meeting = document.createAttribute('div');
//     meeting.textContent = `Come join us for the meeting on Thursday at 7pm!`
//     document.append(meeting);
// };

