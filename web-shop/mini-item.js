export function createMiniItem(item, deleteItemFromCart) {
  let template = `
    <div class="mini-item">
      <img src="${item.images[0]}" alt="🚫" class="image" />
      <div class="title">
        <div class="primary">${item.name}</div>
        <div class="secondary">${item.price}uah</div>
      </div>

      <div class="actions">
        <button class="text btn-delete"><i class="material-icons"> delete</i></button>
      </div>
    </div>
  `;

  let fragment = document.createRange().createContextualFragment(template);
  fragment
    .querySelector(".btn-delete")
    .addEventListener("click", () => deleteItemFromCart(item));

  return fragment.firstElementChild;
}
