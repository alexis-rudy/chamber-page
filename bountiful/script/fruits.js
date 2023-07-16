const fruit_data = 'script/fruitdata.json';
const choice = document.querySelector('.fruitChoices')

// async function apiFetch() {
//     try {
//       const response = await fetch(data);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
// apiFetch();

fetch(fruit_data)
    .then(response => response.json())
    .then(data => {
  const fruitOptions = document.querySelectorAll(".fruitChoices");
  data.forEach(fruit => {
    // console.log(data);
    const option = document.createElement("option");
    option.value = fruit.name;
    option.textContent = fruit.name;
    fruitOptions.forEach(select => {
      select.appendChild(option.cloneNode(true));
    });
  });
});

function summary(){
  let date = new Date();
  let longDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let fruit1 = document.getElementById("fruit1").value;
  let fruit2 = document.getElementById("fruit2").value;
  let fruit3 = document.getElementById("fruit3").value;
  let carbs = 0;
  let protein = 0;
  let fat = 0;
  let sugar = 0;
  let calories = 0;
  let fruitChoices = [fruit1, fruit2, fruit3];

  fruitChoices.forEach(fruit => {
    carbs = fruit_data.fruit.nutritions.carbohydrates;
    protein = fruit_data.fruit.nutritions.protein;
    fat = fruit_data.fruit.nutritions.fat;
    sugar = fruit_data.fruit.nutritions.sugar;
    calories = fruit_data.nutritions.calories;
  });

  document.body.innerHTML = ``;
  let summaryBox = document.createElement('div');
  let information = document.createElement('p');
  information.textContent = `Here's your information:
                            Name: ${name}
                            Email: ${email}
                            Number: ${number}
                            Date: ${longDate}
                            Fruits choices: ${fruit1}, ${fruit2}, ${fruit3}
                            Total carbs: ${carbs}
                            Total protien: ${protein}
                            Total fat: ${fat}
                            Total sugar: ${sugar}
                            Total calories: ${calories}`

  information.append(summaryBox);
  summaryBox.append(document);
  drinksMade++;
}

let drinksMade = 0;
function drinkCount(){
  const drinks = localStorage.setItem("numDrinksMade-ls", drinksMade);
}