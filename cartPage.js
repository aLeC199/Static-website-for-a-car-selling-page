// Initialize cart quantity from localStorage or set to 0
let cart1 = parseInt(localStorage.getItem("cart1")) || 0;
localStorage.setItem("cart1", cart1);

// Select all minus buttons
const buttons = document.querySelectorAll(".rem");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("button-index");

    // Find the quantity <p> next to this button
    const quantityDisplay = button.parentElement.querySelector(".item-num-in-cart");
    let quantity = parseInt(quantityDisplay.textContent);

    // Decrease quantity but not below 0
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;

      // Optionally update localStorage
      cart1--;
      localStorage.setItem("cart1", cart1);
    }
  });
});

// You can also do the same for the "+" buttons:
const plusButtons = document.querySelectorAll("button[id^='add-btn']");

plusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const quantityDisplay = button.parentElement.querySelector(".item-num-in-cart");
    let quantity = parseInt(quantityDisplay.textContent);

    quantity++;
    quantityDisplay.textContent = quantity;

    // Update cart1
    cart1++;
    localStorage.setItem("cart1", cart1);
  });
});
let itemPrice=3233;


let price= document.getElementById("checkout-price").textContent = cart1 * itemPrice;
console.log(price);
