
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(productName, productPrice) {
    const existingProduct = cart.find(product => product.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}


document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('₹', ''));
        addToCart(productName, productPrice);
    });
});


function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cart-items');
    let total = 0;

    cartTable.innerHTML = '';

    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>₹${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });

    document.getElementById('cart-total').textContent = `₹${total.toFixed(2)}`;
}

function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.length > 0) {
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        loadCart();
    } else {
        alert('Cart is already empty.');
    }
}


function checkout() {
    if (confirm('Are you sure you want to checkout?')) {
        localStorage.removeItem('cart');
        loadCart();
        alert('Thank you for your purchase!');
    }
}

document.addEventListener('DOMContentLoaded', loadCart);

const checkoutButton = document.getElementById('checkout-btn');
if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
}
