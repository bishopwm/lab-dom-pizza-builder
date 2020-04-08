// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
//let maxPrice =  document.querySelector("strong").innerText;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

let buttons = {
  pepperoni: document.querySelector("body > div.panel.controls > ul > li:nth-child(1) > button"),
  mushrooms: document.querySelector("body > div.panel.controls > ul > li:nth-child(2) > button"),
  greenPeppers: document.querySelector("body > div.panel.controls > ul > li:nth-child(3) > button"),
  whiteSauce: document.querySelector("body > div.panel.controls > ul > li:nth-child(4) > button"),
  glutenFreeCrust: document.querySelector("body > div.panel.controls > ul > li:nth-child(5) > button")
}

// let prices = {
//   pepperoni: document.querySelector("body > aside > ul > li:nth-child(1)"),
//   mushrooms: document.querySelector("body > aside > ul > li:nth-child(2)"),
//   greenPeppers: document.querySelector("body > aside > ul > li:nth-child(3)"),
//   whiteSauce: document.querySelector("body > aside > ul > li:nth-child(4)"),
//   glutenFreeCrust: document.querySelector("body > aside > ul > li:nth-child(5)")
// }

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  //renderButtons();
  //renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      buttons.pepperoni.className = "btn btn-pepperoni active";
      document.querySelector("#prices-list > li:nth-child(1)").innerHTML = "$1 pepperoni";
      document.querySelector("#prices-list > li:nth-child(1)").style.visibility = "visible";
      
    } else {
      onePep.style.visibility = 'hidden';
      buttons.pepperoni.className = "btn btn-pepperoni";
      document.querySelector("#prices-list > li:nth-child(1)").innerHTML = "";
      document.querySelector("#prices-list > li:nth-child(1)").style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
      buttons.mushrooms.className = "btn btn-mushrooms active";
      document.querySelector("#prices-list > li:nth-child(2)").style.visibility = "visible";
    } else {
      oneMush.style.visibility = 'hidden';
      buttons.mushrooms.className = "btn btn-mushrooms";
      document.querySelector("#prices-list > li:nth-child(2)").style.visibility = "hidden";
    }
  });
}


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreen => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
      buttons.greenPeppers.className = "btn btn-green-peppers active";
      document.querySelector("#prices-list > li:nth-child(3)").style.visibility = "visible";
    } else {
      oneGreen.style.visibility = 'hidden';
      buttons.greenPeppers.className = "btn btn-green-peppers";
      document.querySelector("#prices-list > li:nth-child(3)").style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
      buttons.whiteSauce.className = "btn btn-sauce active";
      document.querySelector("#prices-list > li:nth-child(4)").style.visibility = "visible";
    } else {
      oneSauce.style.visibility = 'hidden';
      buttons.whiteSauce.className = "btn btn-sauce";
      document.querySelector("#prices-list > li:nth-child(4)").style.visibility = "hidden";
    }
  });
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
      buttons.glutenFreeCrust.className = "btn btn-crust active";
      
      
    } else {
      oneCrust.style.visibility = 'hidden';
      buttons.glutenFreeCrust.className = "btn btn-crust";
      
    }
  });
}

// Included this functionality in each individual topping's function instead!
// function renderButtons() {
//   // Iteration 3: add/remove the class "active" of each `<button class="btn">`
// }


// function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`

//     //... your code goes here
// }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});