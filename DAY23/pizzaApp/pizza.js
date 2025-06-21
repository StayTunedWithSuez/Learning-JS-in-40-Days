
function getShopIds() {
    const url = `api/pizzahub`;
    return query(url);
}

function getPizzaList(shopId) {
    const url = `api/pizzahub/pizzas/${shopId}`;
    return query(url);
}

function getMyPizzaWithAddOn(pizzas, type, name) {
    let myPizza = pizzas.find((pizza) => {
        return pizza.type === type && pizza.name === name;
    });

    const url = `api/pizzahub/beverages/${myPizza.id}`;
    return query(url);
}

function performOrder(result) {
    return query('api/order', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pizzaId: result.pizzaId,
            beverageId: result.id,
        }),
    });
}

function confirmOrder (type, name, createdAt){
    console.log(
        `Your order of ${type} ${name} has been placed at ${new Date(createdAt)}!`
    );
}

function orderPizza(type, name) {
    getShopIds()
        .then((shopIds) => {return getPizzaList(shopIds[0])})
        .then((pizzas) => {return getMyPizzaWithAddOn(pizzas, type, name)})
        .then((pizzaWithAddOns) => {return performOrder(pizzaWithAddOns[0])})
        .then((order) => {return confirmOrder(type, name, order.createdAt)})
        .catch((error) => {return console.log(error)})
}

orderPizza("veg", "Margherita");