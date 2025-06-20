const storeEL = document.getElementById("store");
const orderDetailsEL = document.getElementById("order-details");
const addOnEL = document.getElementById("add-on");
const orderEL = document.getElementById("order");

function orderPizza(type, name) {
    storeEL.textContent = `Locating store ...`;
    //Query the pizzahub for a store
    query(`api/pizzahub/`, (result, error) => {
        if(!error) {
            let shopId = result[0];
            console.log(shopId);

            storeEL.textContent = `Located the store ${shopId}`;

            //Get the store and access the pizzas
            orderDetailsEL.textContent = `Loading Order...`;
            query(`api/pizzahub/pizzas/${shopId}`, (result, error) => {
                if(!error) {
                    if (!error) {
                        let pizzas = result;
                        
                        //Find if my pizza is available
                        let myPizza = pizzas.find((pizza) => {
                            return pizza.name === name && pizza.type === type;
                        });
                        console.log(myPizza);

                        orderDetailsEL.textContent = `You have ordered for ${myPizza.type} ${myPizza.name}`;

                        //Checking for the free beverages
                        addOnEL.textContent = `Checking for Add-Ons...`;
                        query(`api/pizzahub/beverages/${myPizza.id}`, (result, error) => {
                            if(!error) {
                                let beverage = result[0];
                                console.log(beverage);
                                addOnEL.textContent = `We have added an add-on ${beverage.name} for you.`;

                                //Prepare an order
                                orderEL.textContent = `Preparing your order...`;
                                query(`api/order`, (result, error) => {
                                    if(!error) {
                                        console.log(`Your order of ${type} ${name} with ${beverage.name} has been placed`)
                                        orderEL.textContent = `Your order of ${type} ${name} with ${beverage.name} has been placed at ${new Date(result.createdAt)}`;
                                    } else {
                                        console.log("No such pizza available!");
                                        orderEL.textContent =  `Bad luck, No Pizza for you today!`;
                                    }
                                },
                                {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify( {
                                        pizzaId: myPizza.id,
                                        beverageId: beverage.id,
                                    })
                                }
                                )
                            }
                        });
                    }
                };
            });

        }
    });
}

orderPizza("veg", "Margherita");