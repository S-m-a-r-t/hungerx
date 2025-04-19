document.addEventListener('DOMContentLoaded', () => {
  const isKhatiPage = document.querySelector('.card_food');
  const isCartPage = document.querySelector('.food_selected');

  if (isKhatiPage) {
    // --- KHATI PAGE LOGIC ---
    document.querySelectorAll('.card_food .btn-primary, .card_food .add-to-cart').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const card = btn.closest('.card');
        const name = card.querySelector('.card-title').innerText;
        const priceText = card.querySelector('.card_prize').innerText;
        const price = parseFloat(priceText.replace(/[^\d]/g, ''));

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));

      });
    });
  }

  if (isCartPage) {
    // --- CART PAGE LOGIC ---
    const cartList = document.querySelector('.food_selected');
    const totalElement = document.querySelector('.cart_total');
    const clearCartBtn = document.querySelector('.cart_clear');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartList.innerHTML = ''; // clear before appending

    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ₹${item.price}`;
      cartList.appendChild(li);
      total += item.price;
    });

    totalElement.textContent = `Total: ₹${total}`;

    // Clear Cart button handler
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        localStorage.removeItem('cart');
        cartList.innerHTML = '';
        totalElement.textContent = 'Total: ₹0';
      });
    }
  }
});
