function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.basePrice = 10;
}

Pizza.prototype.costCalculator = function() {
  let veggieChoices = ["artichoke", "olives", "mushrooms", "basil"]
  let protienChoices = ["pepperoni", "bacon", "ham", "sausage"]
  if(veggieChoices.includes(this.toppings)) {
    this.basePrice += 1;
  }else if(protienChoices.includes(this.toppings)) {
    this.basePrice += 2;
  }
  return this.basePrice;
}

let pizza1 = new Pizza("ham", "medium")
pizza1.costCalculator();