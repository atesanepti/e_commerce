import Data from "../Data/metarial.json" assert { type: "json" };
let products = document.querySelector(".products");

function domRander() {
  Data.sort((a, b) => {
    let x = eval(a.id);
    let y = eval(b.id);
    return x - y;
  }).forEach((data, index) => {
    products.innerHTML += `
      <div class="product">
      <img src="${data.img}" alt="chorki" />
      <div class="title">
          <span><a href=${data.src}>${data.name}</a></span>
        <h5>
          ${data.price}৳ <sub><del>${data.originalPrice}৳</del></sub>
        </h5>
      </div>
      <button onclick="window.open('${data.src}')">buy</button>
    </div>
      `;
  });
}
domRander();
