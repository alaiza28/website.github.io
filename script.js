// display nav

const listPopular = [
  {
    id: 1,
    imgSrc:
      "img/high-angle-view-cup-chamomile-tea-with-lemon-mint-leaves-sugar-white-surface-horizontal-removebg-preview.png",
    countryName: "Chinese",
    soupName: "Sweetdish",
    btnPrice: "$14.00",
  },
  {
    id: 2,
    imgSrc: "img/lentil-soup-with-herbs-spices-white-bowl-removebg-preview.png",
    countryName: "Indian Style",
    soupName: "Lentil Soup",
    btnPrice: "$20.00",
  },
  {
    id: 3,
    imgSrc: "img/carrot-soup-with-cream-parsley.jpg",
    countryName: "Japan",
    soupName: "Carrot Soup",
    btnPrice: "$22.00",
  },
  {
    id: 4,
    imgSrc: "img/soup-isolated-white-background.jpg",
    countryName: "Korea",
    soupName: "Soup Isolated",
    btnPrice: "$10.00",
  },
];

const navToggle = document.querySelector(".nav-links-container");
const menu = document.querySelector(".menu-icon");
const navBg = document.querySelector(".nav-section");
const logo = document.querySelector(".logo");
const shopCart = document.querySelector(".shop-cart-section");
const cartIcon = document.querySelector(".cart-icon");
const closeBtn = document.querySelector(".close-btn");
const products = document.querySelector(".products");
const cartNumber = document.querySelector(".number");
const cartItems = document.querySelector(".mid-section");
const totalItem = document.querySelector(".total-item");
const searchModal = document.querySelector(".search-modal");
const searchBtn = document.querySelector(".search");
const menus = document.querySelector(".menus");
const userBtn = document.querySelector(".user");
const userModalOverlay = document.querySelector(".user-modal-overlay");

//modal btn
const tabBtns = document.querySelectorAll(".tab-btn");
const conModal = document.querySelector(".right-container");
const divContent = document.querySelectorAll(".content");
const closeModal = document.querySelector(".close");

searchBtn.addEventListener("click", () => {
  if (searchModal.classList.contains("open-search")) {
    searchModal.classList.remove("open-search");
  } else {
    searchModal.classList.add("open-search");
  }
});

// Modal user
conModal.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    divContent.forEach((divs) => {
      divs.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

userBtn.addEventListener("click", () => {
  if (userModalOverlay.classList.contains("show-user")) {
    userModalOverlay.classList.remove("show-user");
  } else {
    userModalOverlay.classList.add("show-user");
    document.body.classList.add("body-scroll");
  }
});

closeModal.addEventListener("click", () => {
  if (userModalOverlay.classList.contains("show-user")) {
    userModalOverlay.classList.remove("show-user");
    document.body.classList.remove("body-scroll");
  } else {
    userModalOverlay.classList.add("show-user");
  }
});

menu.addEventListener("click", () => {
  if (navToggle.classList.contains("show-nav")) {
    navToggle.classList.remove("show-nav");
  } else {
    navToggle.classList.add("show-nav");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  renderPopularProduct();

  renderMenuItems(menuData);
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    navBg.style.backgroundColor = "#ef4444";
    logo.style.color = "#fff";
    navToggle.style.color = "#fff";
    menu.style.color = "##fff";
  } else {
    navBg.style.backgroundColor = "#fff";
    logo.style.color = "#ef4444";
    navToggle.style.color = "#000";
    menu.style.color = "#000";
  }
});

cartNumber.addEventListener("click", () => {
  if (shopCart.classList.contains("show-cart")) {
    shopCart.classList.remove("show-cart");
  } else {
    shopCart.classList.add("show-cart");
  }
});

cartIcon.addEventListener("click", () => {
  if (shopCart.classList.contains("show-cart")) {
    shopCart.classList.remove("show-cart");
  } else {
    shopCart.classList.add("show-cart");
  }
});

closeBtn.addEventListener("click", () => {
  if (shopCart.classList.contains("show-cart")) {
    shopCart.classList.toggle("show-cart");
  }
});

// render popular products
const renderPopularProduct = () => {
  let displayProduct = listPopular.map((item) => {
    return `<div class="popular-item">
        <div class="popular-img-container">
            <img src=${item.imgSrc} alt="" class="popular-img">
        </div>

        <div class="star-container">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half' ></i>
        </div>

        <p class="country-name">${item.countryName}</p>
        <h4 class="dish-name">${item.soupName}</h4>

        <div>
            <button class="skew-btn"><span>Add to Cart <span>${item.btnPrice}</span></span></button>
        </div>
    </div>`;
  });
  displayProduct = displayProduct.join("");
  products.innerHTML = displayProduct;
};

const renderMenuItems = (menuData) => {
  let displayMenus = menuData.map((menu) => {
    return `
        <div class="menu-list-item">
            <div class="menu-item-img">
                <img src=${menu.imgSrc} class="img" alt="">
                <div class="heart">
                    <i class='bx bx-heart'></i>
                </div>
            </div>

            <div class="menu-list-category">
                <p>${menu.category}</p>
                <div class="star-container">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
            </div>

            <h4>${menu.soupName}</h4>
            <h3>$${menu.btnPrice}</h3>

            <div class="btn-add-cart">
                <button class="buy-now" type="button">Buy Now</button>
                <button class="add-cart" type="button" onClick="addToCart(${menu.id})">Add to Cart</button>
            </div>
        </div>`;
  });

  displayMenus = displayMenus.join("");
  menus.innerHTML = displayMenus;

  const buyNow = document.querySelectorAll(".buy-now");
  const modalOverlay = document.querySelector(".modal-overlay");
  const cancel = document.querySelector(".cancel");
  const buyNows = document.querySelector(".buy-nows");

  buyNow.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (modalOverlay.classList.contains("open-modal")) {
        modalOverlay.classList.remove("open-modal");
      } else {
        modalOverlay.classList.add("open-modal");
        document.body.classList.add("body-scroll");
      }
    });
  });

  cancel.addEventListener("click", () => {
    if (modalOverlay.classList.contains("open-modal")) {
      modalOverlay.classList.remove("open-modal");
      document.body.classList.remove("body-scroll");
    } else {
      modalOverlay.classList.add("open-modal");
    }
  });

  buyNows.addEventListener("click", () => {
    if (modalOverlay.classList.contains("open-modal")) {
      modalOverlay.classList.remove("open-modal");
      document.body.classList.remove("body-scroll");
    } else {
      modalOverlay.classList.add("open-modal");
    }
  });
};

const filterBtns = document.querySelectorAll(".btn-filter");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menuData.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });

    if (category === "all") {
      return renderMenuItems(menuData);
    } else {
      return renderMenuItems(menuCategory);
    }
  });
});

// Add to Cart
let cart = [];

function addToCart(id) {
  //console.log(id)
  // check if the product already in cart
  if (cart.some((menu) => menu.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = menuData.find((menu) => menu.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });

    console.log(cart);
  }

  updateCart();
}

//update the Cart

function updateCart() {
  renderCartItems();
  renderSubTotal();
}

function renderSubTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.btnPrice * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  totalItem.innerHTML = totalPrice.toFixed(2);
  cartNumber.innerHTML = totalItems;
}

function renderCartItems() {
  cartItems.innerHTML = ""; // clear cart elements
  cart.forEach((item) => {
    cartItems.innerHTML += `
        <div class="cart-item">
                <div class="mid-cart-container">
                  <img
                    src="${item.imgSrc}"
                    class="cart-img"
                    alt=""
                  />
                  <div class="mid-cart-desc">
                    <h4>${item.soupName}</h4>
                    <p>$ ${item.btnPrice}</p>
                    <div>
                      <button class="btn-minus btts" onCLick="changeNumberOfUnits('minus', ${item.id})">-</button>
                      <span class="quantity">${item.numberOfUnits}</span>
                      <button class="btn-plus btts" onCLick="changeNumberOfUnits('plus', ${item.id})">+</button>
                    </div>
                  </div>
                </div>

                <div class="remove-cart-item trash">
                  <i class="bx bx-trash-alt trash" onClick="removeFromCart(${item.id})"></i>
                </div>
              </div>`;
  });
}

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.inStock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}
