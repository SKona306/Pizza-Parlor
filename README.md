Description: Pizza ()

Test: "It will create a new instances of the pizza object with key-value pair of toppings and size."
Code: let pizza1 = new Pizza(["cheese", "ham"], "medium") 
Expect(pizza1(toppings: ["cheese, "ham"], size: "medium"))

Description: Pizza.prototype.costCalculator()

Test: "It should increase base price by 1 when one veggie topping value is inputted."
Code: let pizza1 = new Pizza ("olive", "medium", 10)
Expect(pizza1.baseprice.toEqual(11))

Test: "It should increase price by 2 when one protein topping value is inputted."
Code: let pizza1 = new Pizza ("ham", medium, 10)
Expect(pizza1.basePrice.toEqual(12))

Test: "It should increase price by 2 when two veggie toppings are inputted."
Code: let pizza1 = new Pizza(["olives", "mushrooms"], medium, 10)
Expect(basePrice.toEqual(12))

Test : "It should increase price by 4 when two protien items are inputted."
Code: let pizza1 = new Pizza(["ham", "bacon"], medium, 10)
Expect(basePrice.toEqual(14))