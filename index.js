// Product class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.length;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    displayCartItems() {
        this.items.forEach((item, index) => {
            console.log(`Item ${index + 1}: ${item.product.name} - Quantity: ${item.quantity}`);
        });
    }
}

// Testing
// Create products
const product1 = new Product(1, "Product 1", 10);
const product2 = new Product(2, "Product 2", 20);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 1);
cart.addItem(item1);
cart.addItem(item2);

// Display the cart
cart.displayCartItems();

// Remove an item from the cart
cart.removeItem(0);

// Display the cart again
cart.displayCartItems();
