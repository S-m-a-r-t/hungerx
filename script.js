const cart = [];
const cartItems = document.getElementsByClassName("food_selected");
const cartTotal = document.getElementsByClassName("cart_total");

document.querySelectorAll(".btn-primary").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Button clicked");
    
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}
