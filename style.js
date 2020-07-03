// message on `li a href` without pages //
function page_unavailable(node) {
  return alert(
    "Sorry, this page is currently under construction. Thanks for your patience."
  );
}

// SHOPPING CART //
const addCartBtns = document.querySelectorAll(".addB");
const cart = [];
const cartContainer = document.querySelector(".shopList");
const totalDisplay = document.querySelector(".totalPrice");
let totalPrice = 0;
const updateCart = () => {
  cartContainer.innerHTML = "";
  cart.forEach(function (item) {
    totalPrice += item.productPrice * item.quantity;
    const el = document.createElement("div");
    el.classList = "shopListRow";
    el.innerHTML = `
    <div class= "shopImgName">
    <img class= "shopWineImg" src="${item.productImage}" alt="placeholder" height= "30" />
    <span class= "shopWineName">${item.productName}</span>
    </div>
    <span class= "shopPrice">${item.productPrice}</span>
    <div class="shopQuantityReset">
    <input type="number" min="1" id="shopQuantity" value="${item.quantity}" />
    <button type="reset" id="resBtn">X</button>
    </div>
    <div>`;
    // this function creates the new element `el` directly inside the cart container //
    cartContainer.appendChild(el);
  });

  // Update Cart Item Quantity //
};
const addHandler = (event) => {
  const productImage = event.target.parentElement.querySelector(".wineImg").src;
  const productName = event.target.parentElement.querySelector("h4").innerText;
  const productPrice = +event.target.parentElement
    .querySelector("span")
    .innerText.slice(1);

  let found = false;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    if (item.productName === productName) {
      found = true;
      item.quantity = item.quantity + 1;
    }
  }
  if (found === false) {
    cart.push({ productImage, productName, productPrice, quantity: 1 });
  }

  updateCart();
};

for (let i = 0; i < addCartBtns.length; i++) {
  addCartBtns[i].onclick = addHandler;
}

// remove cart items

/*Update cart total 
      function updateCartTotal()
      const totalAmount = [];
      const totalDisplay = document.querySelector(".totalPrice");
      totalAmount.forEach(function(item){
        totalAmount.push(parseFloat(totalDisplay.textContent))
      });
        console.log(totalAmount);

      2nd attempt
      function updateCartTotal()
      const cartItemContainer = document.getElementsByClassName(".shopList")[0];
      const shopListRows = cartItemContainer.getElementByClassName(".shopListRow");
      let total = 0;
      for (let i = 0; i < shopListRows.length; i++) {
      const shopListRow = shopListRows[i];
      const priceItem = shopListRow.getElementsByClassName("shopPrice")[0];
      const quantityItem = shopListRow.getElementbyIdName("#shopQuantity")[0];
      const totQuantity = quantityItem.value;
      total = total + (priceItem * quantityItem)
      };
      document.getElementByClassName("totalPrice")[0].innerText = "£" + total;
      updateCartTotal();
    };*/

const ResBtn = document.querySelectorAll("#resBtn");
for (let i = 0; i < ResBtn.length; i++) {
  const clicked = ResBtn[i];
  GamepadButton.AddEventListener("click", function (event) {
    console.log("clicked");
  });
}

/* // Javascript bit for the slider in the homepage (index.html)
that never worked //
  let i = 0;
  const slides= [];
  const time = 3000;

  slides [0] = "images/Offer1Slider.jpg";
  slides [1] = "images/Offer2Slider.jpg";
  slides [2] = "images/Offer3Slider.jpg";

  const sliderS = document.querySelector(".slider")

  function slideShow(){
    const slides1 = document.sliderS = slides[i];
    if(i < slides1.length -1){
      i++;
    } else {
      i = 0;
    }
    // Runs function every x seconds as per const time//
    setTimeout("slideShow()", time);
  }

  //Run function when page loads//
  window.onload = slideShow;*/
