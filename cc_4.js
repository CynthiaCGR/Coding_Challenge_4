const products = [
    {name: "Gaming Console" ,
        category: "electronics" ,
        price: 299.99 ,
        inventory: 50 
    } ,
    {
        name: "Polo Shirt" ,
        category: "apparel" ,
        price: 29.99 ,
        inventory: 100
    } ,
    {
        name: "Milk" ,
        category: "groceries" ,
        price: 3.99 ,
        inventory: 200
    } ,
    { name: "Mop" ,
        category: "household" ,
        price: 19.99 ,
        inventory: 50
    } ,
    { name: "Body Moisturizer" ,
        category: "other" ,
        price: 19.99 ,
        inventory: 55
    }
];

for (const product of products) {
    switch (product.category) {
        case "electronics":
product.price *= 0.80; // 20% discount
            break;
        case "apparel":
            product.price *= 0.85; // 15% discount
            break;
        case "groceries":
            case "household":
            product.price *= 0.90; // 10% discount
            break;

            default:
                // No discount
                break;
    }
}
let customerType = "student";
let customerDiscount = 0;

if (customerType === "student") {
    customerDiscount = 0.05; // 5% discount for students
}
else if (customerType === "senior") {
    customerDiscount = 0.07; // 7% discount for seniors
}
else {
    customerDiscount = 0; // No discount for other customer types
}
for (let customer =1; customer <= 3; customer++) {
    let total = 0;
for (const product of products) {

    total += product.price ;
    if (product.inventory >0) {
        product.inventory--;
    }
}

total = total * (1 - customerDiscount); 
console.log( 
    `Customer ${customer} Total: $${total.toFixed(2)}`
);
}
console.log("Single Product Details:");
for (const key in products [0]) {
    console.log(`${key}: ${products[0][key]}`);
}

console.log("Updated Product Information:");
for (const product of products) {
    console.log("-------------------------");
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }   
}
