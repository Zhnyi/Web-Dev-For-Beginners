/*1. **Identify** the data type and its purpose
2. **Explain** why this data type is the best choice for specific shopping cart features
3. **Provide** realistic code examples showing the data type in action
4. **Describe** how this data type interacts with other parts of the shopping cart
*/


//Product names, descriptions, user information
//Data Type: String
//Purpose: Strings are used to store text data, such as product names, descriptions, and user information. They allow for easy manipulation and display of textual content in the shopping cart.
let productName = "Wireless Headphones";
let productDescription = "High-quality wireless Headphones.";
let userName = "Jan Doe";

// These data is strings for user to view and understand the products

//Prices, quantities, tax calculations
//Data Type: Number
//Purpose: Numbers are used for calculation, these data required calculation
let productPrice = 99.99;
let productQuantity = 2;
let taxRate = 0.08;

// These data will be used for calculation before show to user

//Product availability, stock status
//Data Type: Boolean
//Purpose: Booleans are used to represent true/false values, such as product availability or stock status. They help determine whether a product can be added to the cart or if it is out of stock.
let isProductAvailable = true;

// These data will be used to check if product is available or not

//Intentionally empty values
//Data Type: Null
//Purpose: Null is used to represent the intentional absence of any object value. It can be used to indicate that a variable has no value or that a product has not been selected yet.
let selectedProduct = null;

// These data will be used to check if product is selected or not

//Unique identifiers (advanced use)
//Data Type: Symbol
//Purpose: Symbols are used to create unique identifiers for objects, ensuring that each product or user has a distinct identity. This is particularly useful in scenarios where you need to avoid naming collisions or ensure that certain properties are unique.
let productId = Symbol("productId");

// These data will be used to create unique identifiers for products
