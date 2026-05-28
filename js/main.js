async function fetchProducts() {
let products = ""
  let data = await fetch("https://fakestoreapi.com/Products");
  let res = await data.json();

  products = res.map((product) => {
    return ` <div class="product">
            <div class="title">${product.title}</div>
            <div class="image">
                <img src=${product.image}>
            </div>
            <div class="category">${product.category}</div>
            <div class="description">
                ${product.description}
            </div>w
            <div class="rating">
                <div class="rate">${product.rating.rate}</div>
                <div class="count">${product.rating.count}</div>
            </div>
            <button class="btn">buy now</button>
        </div>`;
  });

  document.querySelector("#products").insertAdjacentHTML("afterbegin",products.join(" "))
}

fetchProducts();
