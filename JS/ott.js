import Data from "../Data/ott.json" assert { type: "json" };
let products = document.querySelector(".products");
let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
let viewBtn = document.querySelector(".viewBtn");
let isShow = false;
function domRander(limit) {
  Data.sort((a, b) => {
    let x = eval(a.id);
    let y = eval(b.id);
    return x - y;
  }).forEach((data, index) => {
    if (index > limit) return;
    products.innerHTML += `
      <div class="product">
      <img src="${data.img}" alt="chorki" />
      <div class="title">
          <span><a href="#">${data.name}</a></span>
        <h5>
          ${data.price}৳ <sub><del>${data.originalPrice}৳</del></sub>
        </h5>
      </div>
      <button>buy</button>
    </div>
      `;
  });
}
domRander(7);
let allProduct = document.querySelectorAll(".product");
function filtered() {
  let value = searchInput.value.toLowerCase();
  allProduct.forEach((product) => {
    let productName = product.querySelector("span a").innerText.toLowerCase();
    product.style.maxWidth = "300px";
    product.style.margin = "0 auto";
    if (productName.indexOf(value) != -1) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
searchBtn.addEventListener("click", filtered);

viewBtn.addEventListener("click", () => {
  isShow = !isShow;
  products.innerText = null;
  domRander(isShow ? Data.length - 1 : 7);
});
document.body.addEventListener("keypress", (e) => {
  if (e.keyCode != 13) return;
  filtered();
});
