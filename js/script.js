document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.parentElement;
      const productName = productCard.querySelector('h3').innerText;
      const productPrice = productCard.querySelector('p').innerText;

      cart.push({ name: productName, price: productPrice });
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${productName} has been added to your cart!`);
    });
  });
});
