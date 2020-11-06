// import product list
import product from "./product.js";

const container = document.getElementById("container"); //products containers
const dropMenu = document.getElementById("drop");
const dropTrigger = document.getElementById("dropTrigger");
const leftDropTrigger = document.getElementById("mobile-left-trigger");
const navLeft = document.getElementById("nav-left");

// get the  of columns
let productsColumns = Object.keys(product);

//node container
let content = [];

productsColumns.forEach((columns) => {
  //products
  let details = [];
  details = product[`${columns}`].map(
    (item) =>
      `<div class="products">
            <img src=${item} />
            <div class="description">
              <div class="contents">
                <span>save</span>
                <div class="cta">
                  <i class="fa fa-link"></i>
                  <i class="fa fa-upload"></i>
                  <i class="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          </div>`
  );
  let productCol = `<div class=${columns}>${[...details].join("")}</div>`;

  content.push(productCol);
});
// console.log(content);
container.innerHTML = content.join("");

dropTrigger.addEventListener("click", () => {
  dropMenu.classList.toggle("drop-open");
});

leftDropTrigger.addEventListener("click", () => {
  navLeft.classList.toggle("left-drop-open");
});
