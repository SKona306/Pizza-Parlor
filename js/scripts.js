// Utility Logic 


//Business Logic for Pizza orders

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costCalculator = function() {
  const veggieChoices = ["artichoke", "olives", "mushrooms", "basil"]
  const protienChoices = ["pepperoni", "bacon", "ham", "sausage"]
  let basePrice = 10;
  this.toppings.forEach(function(topping) {
    if(veggieChoices.includes(topping)) {
      basePrice += 1;
    }else if(protienChoices.includes(topping)) {
      basePrice += 2;
    }
  })
  if(this.size === "medium") {
    basePrice += 1;
  }else if(this.size === "large") {
    basePrice += 2;
  }else if(this.size === "Extra-large") {
    basePrice += 3;
  }
  return basePrice;
}

// User Interface Logic

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    let toppingsArray = []
    let pizzaSize = $("#size").val();
    let pushToppings = $("input:checkbox[name=toppings]:checked").each(function() {let topping = $(this).val();
    toppingsArray.push(topping);});
    let newOrder = new Pizza(toppingsArray, pizzaSize)
    let price = newOrder.costCalculator()
    $(".pizza-size").html(pizzaSize);
    $(".final-price").html(price)
    $("#hidden").show();
  });
});