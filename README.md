# Pizza Parlor

### A webpage that calculates the price of the users pizza order

### By Shaun Kent

## Technologies Used

* HTML5
* CSS
* Bootstrap
* Javascript
* JQuery 

## Description 

A webpage that will take the users input for pizza toppings and size and return a final calculated price to the user. 

## Setup/Instillation Requirements

* Go to repository using this url: https://github.com/SKona306/Pizza-Parlor

* Click the green code button in the top right of repository

* Copy HTTPS link

* Open command line and enter: `cd [directory name]`

* In command line enter: `git clone [HTTPS link]`

* In command line enter: `code .`

## Specifications
```
Description: Pizza ()

Test: "It will create a new instances of the pizza object with key-value pair of toppings and size."
Code: let pizza1 = new Pizza(["cheese", "ham"], "medium") 
Expect(pizza1(toppings: ["cheese, "ham"], size: "medium"))

Description: Pizza.prototype.costCalculator()

Test: "It should increase base price by 1 when one veggie topping value is inputted."
Code: let pizza1 = new Pizza ("olive", "medium")
Expect(pizza1.basePrice.toEqual(11))

Test: "It should increase price by 2 when one protein topping value is inputted."
Code: let pizza1 = new Pizza ("ham", medium)
Expect(pizza1.basePrice.toEqual(12))

Test: "It should increase price by 2 when two veggie toppings are inputted."
Code: let pizza1 = new Pizza(["olives", "mushrooms"], medium)
Expect(pizza1.basePrice.toEqual(12))

Test : "It should increase price by 4 when two protien items are inputted."
Code: let pizza1 = new Pizza(["ham", "bacon"], medium)
Expect(pizza1.basePrice.toEqual(14)) 

Test: "It should increase the price by the stated value based on the size inputted."
Code: let pizza1 = new Pizza(["ham"], medium)
Expect(pizza1.basePrice.toEqual(14))
```
## Known Bugs

* width of the webpage is limited by the static sizing of the image, making readability and usability on mobile sized devices difficult/not available. 

## License 

[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information

* shaunkent81@gmail.com