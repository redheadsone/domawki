function getItems() {
  let items = [
    {
      name: "Теплый костюм",
      images: [
        "http://twohearts.com.ua/data/uploads/2018/07/DSC02362-750x1100.jpg",
        "http://twohearts.com.ua/data/uploads/2018/07/DSC02370-750x1100.jpg"
      ],
      price: 1500,
      details:
        "Костюм из 100 % хлопка . Приятный к телу, идеален для зимних вечеров."
    },
    {
      name: "Костюм плиссе",
      images: [
        "https://static.tildacdn.com/tild3261-3131-4564-b032-323230353366/IMG_3147.JPG",
        "https://static.tildacdn.com/tild3833-6139-4661-b331-373066303338/IMG_3145__.JPG"
      ],
      price: 3500,
      details: `Костюм плиссе с объемным свитером с горловиной
        Состав: 50% шерсть, 50% акрил`
    },
    {
      name: "Пуховик бархатный",
      images: [
        "http://twohearts.com.ua/data/uploads/2018/11/puhovik-roz-zol-750x1100.jpg"
      ],
      price: 6500,
      details: `Подходит на температуру до -30 градусов`
    }
  ];
  return items;
}

function createCardElement(item, addItemToCart) {
  let template = `
    <div class="item card">
      <img
        src="${item.images[0]}"
        alt=""
        class="image"
      />
      <div class="title">
        <div class="primary">${item.name}</div>
        <div class="secondary">${item.details}</div>
      </div>

      <div class="actions">
        <button class="text"><i class="material-icons"> share </i></button>
        <button class="text">
          <i class="material-icons"> favorite_border </i>
        </button>
        <button class="contained btn-buy">
          <i class="material-icons"> shopping_cart </i>${item.price} uah
        </button>
      </div>
    </div>
   
  `;

  let fragment = document.createRange().createContextualFragment(template);
  fragment
    .querySelector(".btn-buy")
    .addEventListener("click", () => addItemToCart(item));

  return fragment.firstElementChild;
}

let cartCount = document.querySelector(".cart-count");
let cartTotal = document.querySelector(".cart-total");
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
}

let containerItemms = document.querySelector(".items");

var items = getItems();

items.forEach(item => {
  let el = createCardElement(item, addItemToCart);
  containerItemms.appendChild(el);
});

let cartPopup = document.querySelector(".cart-popup");
document.querySelector(".btn-cart").addEventListener("click", () => {
  cartPopup.classList.toggle("hidden");
});

//var el = createCardElement(items[0]);
