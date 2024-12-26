
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    displayCartItems();
});

  function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-container");
  const totalPriceEl = document.getElementById("cart-total-price");

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "0.00";
    return;
  }

  let totalPrice = 0;

    cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <img src="${item.image}" alt="${item.title}" style="width:60px;">
        <p><strong>${item.title}</strong></p>
      </div>
      <p>$${item.price.toFixed(2)}</p>
      <div>
        <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
        ${item.quantity}
        <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
      </div>
      <p>$${subtotal.toFixed(2)}</p>
      <button class="btn-remove" onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  totalPriceEl.textContent = totalPrice.toFixed(2);
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();   
  displayCartItems();
}

function changeQuantity(index, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();   
  displayCartItems();
}

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase! 😃 ");
  localStorage.removeItem("cart");
  updateCartCount();
  displayCartItems();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalItems = 0;
  cart.forEach(item => totalItems += item.quantity);
  const cartCountEl = document.querySelector(".cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
  }
}
