export function createCatalogItem(item, addItemToCart) {
  let template = `
      <div class="item card">
        <img
          src="${item.images[0]}"
          alt="🚫"
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
