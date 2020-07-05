if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const resetButtons = document.getElementsByClassName("resBtn");
  for (let i = 0; i < resetButtons.length; i++) {
    const entryButton = resetButtons[i];
    entryButton.addEventListener("click", removeShopListItem);
  }

  const shopQuantityInputs = document.getElementsByClassName("shopQuantityI");
  for (let i = 0; i < shopQuantityInputs.length; i++) {
    let input = shopQuantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Adding products into the Shopping Cart List //
  const addCartButtons = document.getElementsByClassName("addB");
  for (let i = 0; i < addCartButtons.length; i++) {
    let addButton = addCartButtons[i];
    addButton.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("checkoutBtn")[0]
    .addEventListener("click", purchaseClicked);
}
// This function will clear the Shopping Cart List after the purchase button is clicked //
function purchaseClicked() {
  alert("Thank you for your purchase!");
  const shopListItems = document.getElementsByClassName("shopList")[0];
  while (shopListItems.hasChildNodes()) {
    shopListItems.removeChild(shopListItems.firstChild);
  }
  updateCartTotal();
}

// Removing shopping Cart Row when the Reset Button is clicked //
function removeShopListItem(event) {
  let entryButtonClicked = event.target;
  entryButtonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

//  Changing Shopping Cart total according to input change //
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let addButton = event.target;
  const wineBottle = addButton.parentElement.parentElement;
  const wineName = wineBottle
    .getElementsByClassName("wineName")[0]
    .innerText.slice(0, 15);
  const price = wineBottle.getElementsByClassName("price")[0].innerText;
  const wineImg = wineBottle.getElementsByClassName("wineImg")[0].src;
  console.log(wineName, price, wineImg);
  addWineToCart(wineName, price, wineImg);
  updateCartTotal();
}

// Creating Shopping Cart List Row //
function addWineToCart(wineName, price, wineImg) {
  let shopListRow = document.createElement("div");
  shopListRow.classList.add("shopListRow");
  const shopListItems = document.getElementsByClassName("shopList")[0];
  const shopListItemNames = shopListItems.getElementsByClassName(
    "shopWineName"
  );
  for (let i = 0; i < shopListItemNames.length; i++) {
    if (shopListItemNames[i].innerText == wineName) {
      alert("This item is already into your Shopping Cart");
      return;
    }
  }
  const shopListRowContents = `
  <div class="shopImgName">
    <img
      class="shopWineImg"
      src="${wineImg}"
      alt="placeholder"
      height="30"
    />
    <span class="shopWineName">${wineName}</span>
  </div>
  <span class="shopPrice">${price}</span>
  <div class="shopQuantityReset">
    <input
      type="number"
      min="1"
      class="shopQuantityI"
      value="1"
    />
    <button type="reset" class="resBtn">X</button>
  </div>`;
  shopListRow.innerHTML = shopListRowContents;
  shopListItems.append(shopListRow);
  shopListRow
    .getElementsByClassName("resBtn")[0]
    .addEventListener("click", removeShopListItem);
  shopListRow
    .getElementsByClassName("shopQuantityI")[0]
    .addEventListener("change", quantityChanged);
}

// Updating the Shopping Cart total //
function updateCartTotal() {
  const shopListContainer = document.getElementsByClassName("shopList")[0];
  const shopListRows = shopListContainer.getElementsByClassName("shopListRow");
  let totalPrice = 0;
  for (let i = 0; i < shopListRows.length; i++) {
    let shopListRow = shopListRows[i];
    const priceElement = shopListRow.getElementsByClassName("shopPrice")[0];
    const quantityElement = shopListRow.getElementsByClassName(
      "shopQuantityI"
    )[0];
    const price = parseFloat(priceElement.innerText.replace("£", ""));
    const quantity = quantityElement.value;
    totalPrice = totalPrice + price * quantity;
  }
  totalPrice = Math.round(totalPrice * 100) / 100;
  document.getElementsByClassName("totalPrice")[0].innerText = "£" + totalPrice;
}
