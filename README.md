Description: Pizza ()

Test: "It will create a new instances of the pizza object with key-value pair of toppings and size."
Code: let pizza1 = new Pizza(["cheese", "ham"], "medium") 
Expect(pizza1(toppings: ["cheese, "ham"], size: "medium"))

Description: Pizza.prototype.costCalculator()

Test: "It should increase base price by 1 when one veggie topping value is inputed."
Code: let pizza1 = new Pizza ("artichoke", "medium", 10)
Expect(pizza1.baseprice.toEqual(11))