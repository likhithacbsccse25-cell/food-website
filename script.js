const menuItems = [
  { name: "Paneer Tikka", price: 180, img: "C:\Users\DELL\OneDrive\Desktop\image\Paneer tikka.jps.jpg" },
  { name: "Masala Dosa", price: 120, img: "C:\Users\DELL\OneDrive\Desktop\image\masala dosa.jps.webp" },
  { name: "Veg Biryani", price: 150, img:"C:\Users\DELL\OneDrive\Desktop\image\Veg Biryani.jps.jpg" },
  { name: "Butter Naan", price: 40, img: "C:\Users\DELL\OneDrive\Desktop\image\butter naan.jps.jpg"},
  { name: "Chole Bhature", price: 130, img:"C:\Users\DELL\OneDrive\Desktop\image\Chole Bhature.jps.jpeg" },
  { name: "Gulab Jamun", price: 60, img: "C:\Users\DELL\OneDrive\Desktop\image\Gulab Jamun.jps.webp"},
  { name: "Mango Lassi", price: 70, img:"C:\Users\DELL\OneDrive\Desktop\image\Mango Lassi.jps.jpg"},
  { name: "Tandoori Chicken", price: 220, img: "C:\Users\DELL\OneDrive\Desktop\image\Tandoori Chicken.jps.jpg" },
  { name: "Pav Bhaji", price: 110, img:"C:\Users\DELL\OneDrive\Desktop\image\Pav Bhaji.jps.jpg" }
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
