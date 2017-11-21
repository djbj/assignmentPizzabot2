//Put your Javscript code here:

const pizzas = [
  {name: "Vegetarian Pizza", price: 95},
  {name: "Hawaiian Pizza", price: 80},
  {name: "Pepperoni Pizza", price: 90}
]

alert(
  `Hey! Happy to serve you pizza. On our menu we have ${pizzas.length} pizzas.
   Menu 1 ${pizzas[0].name} costs ${pizzas[0].price}
   Menu 2 ${pizzas[1].name} costs ${pizzas[1].price}
   Menu 3 ${pizzas[2].name} costs ${pizzas[2].price}
  `
)

const orderName = prompt ("Enter the name of the pizza you want to order today: ")

const checkOrderName = (orderName) => {
  if ((orderName === pizzas[0].name) ||
      (orderName === pizzas[1].name) ||
      (orderName === pizzas[2].name)) {
      return true
  } else {
      return false
  }
}

const orderedPizza = pizzas.find( (pizza) => {
  return pizza.name === orderName
})

const totalCost = (orderQuantity, orderName) => {
  return orderTotal = orderQuantity * orderedPizza.price
}

const cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    return 10
  } else if ((orderQuantity >= 3) && (orderQuantity <=5)) {
    return 15
  } else if (orderQuantity > 5) {
    return 20
  }
}

if (checkOrderName (orderName) ) {
    const orderQuantity = prompt ("How many of " + orderName + " do you want ?")
    totalCost (orderQuantity, orderName)

    alert ("Great, I'll get started on your " +
           orderName +
           " right away, it will cost " +
           totalCost (orderQuantity) +
           " kr. The pizzas will take " +
           cookingTime (orderQuantity) +
           " minutes.")
} else {
    alert ("The " + orderName + " is not on our menu !")
}
