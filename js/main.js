
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
  });
  
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    cart.forEach(item => totalItems += item.quantity);
    const cartCountEl = document.querySelector(".cart-count");
    if (cartCountEl) {
      cartCountEl.textContent = totalItems;
    }
  }
  