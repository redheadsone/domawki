import { getItems } from "./item.service.js";
import { createCatalogItem } from "./catalog-item.js";
import { createMiniItem } from "./mini-item.js";

let cartCount = document.querySelector(".shopping-cart__count");
let cartTotal = document.querySelector(".shopping-cart__total__price");
let cartList = document.querySelector(".shopping-cart__list");
let shoppingCartItems = [];

function addItemToCart(item) {
  console.log(item);
  shoppingCartItems.push(item);
  // item count
  cartCount.textContent = shoppingCartItems.length;
  // total price
  cartTotal.textContent = shoppingCartItems
    .map(item => item.price)
    .reduce((sum, price) => +price + sum, 0);

  let miniEl = createMiniItem(item, deleteItemFromCart);
  cartList.appendChild(miniEl);
}

function deleteItemFromCart(item) {}

let containerItemms = document.querySelector(".items");

var items = getItems();

items.forEach(item => {
  let el = createCatalogItem(item, addItemToCart);
  containerItemms.appendChild(el);
});

let cartPopup = document.querySelector(".shopping-cart__popup");
document.querySelector(".btn-shopping-cart").addEventListener("click", () => {
  cartPopup.classList.toggle("hidden");
});

//var el = createCardElement(items[0]);
