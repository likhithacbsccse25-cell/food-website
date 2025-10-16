const menuItems = [
  { name: "Paneer Tikka", price: 180, img:"https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg" },
  { name: "Masala Dosa", price: 120, img: "https://www.mydelicious-recipes.com/home/images/120_1080_1080/mydelicious-recipes-masala-dosa-with-batter" },
  { name: "Veg Biryani", price: 150, img:"https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-3.jpg" },
  { name: "Butter Naan", price: 40, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan-500x500.jpg"},
  { name: "Chole Bhature", price: 130, img:"https://chefadora.b-cdn.net/medium_23ff54faa8628ac0b378003d51b400e4_511694cd35.jpg" },
  { name: "Gulab Jamun", price: 60, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp"},
  { name: "Mango Lassi", price: 70, img:"https://www.midwestliving.com/thmb/2n9egOlUYE0dnPxJoHYY7disquI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KeyIngredient_MangoLassi_BP_1019_preview-0bdf9f28d35043748efaa9fd1c7b806c.jpg"},
  { name: "Tandoori Chicken", price: 220, img: "https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3.jpg" },
  { name: "Pav Bhaji", price: 110, img:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/01171428/YFL-Pav-Bhaji-3.jpg" }
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
