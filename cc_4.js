const products = [
    {name: "Gaming Console" ,
        category: "Electronics" ,
        price: 299.99 ,
        inventory: 50 
    } ,
    {
        name: "Polo Shirt" ,
        category: "Apparel" ,
        price: 29.99 ,
        inventory: 100
    } ,
    {
        name: "Milk" ,
        category: "Groceries" ,
        price: 3.99 ,
        inventory: 200
    } ,
    { name: "Mop" ,
        category: "Household" ,
        price: 19.99 ,
        inventory: 50
    } ,
    { name: "Body Moisturizer" ,
        category: "Other" ,
        price: 19.99 ,
        inventory: 55
    }
];

for (const product of products) {
    switch (product.category) {
        case "Electronics":
product.price *= 0.80; // 20% discount
            break;
        case "Apparel":
            product.price *= 0.85; // 15% discount
            break;
        case "Groceries":
            case "Household":
            product.price *= 0.90; // 10% discount
            break;

            default:
                // No discount
                break;
    }
}
let customerType = "Student";
let customerDiscount = 0;

if (customerType === "Student") {
    customerDiscount = 0.05; // 5% discount for students
}
else if (customerType === "Senior") {
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
