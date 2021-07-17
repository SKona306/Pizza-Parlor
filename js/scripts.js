function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.basePrice = 10;
}

Pizza.prototype.costCalculator = function() {
  if(this.toppings === "artichoke") {
    return this.basePrice = 11;
  }
}

let pizza1 = new Pizza("artichoke", "medium")