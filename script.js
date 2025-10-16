const menuItems = [
  { name: "Paneer Tikka", price: 180, img: "images/paneer.jpg" },
  { name: "Masala Dosa", price: 120, img: "images/dosa.jpg" },
  { name: "Veg Biryani", price: 150, img: "images/biryani.jpg" },
  { name: "Butter Naan", price: 40, img: "images/naan.jpg" },
  { name: "Chole Bhature", price: 130, img: "images/chole.jpg" },
  { name: "Gulab Jamun", price: 60, img: "images/jamun.jpg" },
  { name: "Mango Lassi", price: 70, img: "images/lassi.jpg" },
  { name: "Tandoori Chicken", price: 220, img: "images/tandoori.jpg" },
  { name: "Pav Bhaji", price: 110, img: "images/pavbhaji.jpg" }
];
const menuContainer = document.getElementById("menu-items");
const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");
let cart = [];

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}" width="100%" />
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
  `;
  menuContainer.appendChild(card);
});

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  totalPrice.textContent = total;
}

document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
function updateCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    li.classList.add("bounce");
    cartList.appendChild(li);
  });
  totalPrice.textContent = total;
}
