// Utility Logic 

const veggieChoices = ["artichoke", "olives", "mushrooms", "basil"]
const protienChoices = ["pepperoni", "bacon", "ham", "sausage"]

//Business Logic for Pizza orders

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costCalculator = function() {
  let basePrice = 10;
  this.toppings.forEach(function(topping) {
    if(veggieChoices.includes(topping)) {
      basePrice += 1;
    }else if(protienChoices.includes(topping)) {
      basePrice += 2;
    }
  })
  if(this.size === "small") {
    basePrice += 1;
  }else if(this.size === "medium") {
    basePrice += 2;
  }else if(this.size === "large") {
    basePrice += 3;
  }
  return basePrice;
}

let pizza1 = new Pizza([ "ham"], "medium");
pizza1.costCalculator();