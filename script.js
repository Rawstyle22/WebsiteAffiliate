const products = [
  {
    name: "PROMO BOARDSHORT 3PCS",
    price: "Rp 82.000",
    image: "img/boardshort.jpg",
    link: "https://s.shopee.co.id/AKUJzowvRY"
  },
  {
    name: "Triplee aJacket Tracktop suporter Navy White",
    price: "Rp 299.000",
    image: "img/triplee jacket.jpg",
    link: "https://s.shopee.co.id/W0OIm42VI"
  },
  {
    name: "House Of Smith Sweater Crewneck Pria",
    price: "Rp 450.000",
    image: "img/sweater.jpg",
    link: "https://shopee.co.id/affiliate-link-anda"
  },
  {
    name: "atasan bordir wanita maomao blouse",
    price: "Rp 199.000",
    image: "img/atasan bordir wanita maomao blouse.jpg",
    link: "https://s.shopee.co.id/5L5eeiZodG"
  },
  {
    name: "gamis omaya",
    price: "Rp 199.000",
    image: "img/gamis omaya.jpg",
    link: "https://s.shopee.co.id/9fEdoyssO4"
  },
  {
    name: "dres maxy gamis",
    price: "Rp 199.000",
    image: "img/dres maxy gamis.jpg",
    link: "https://s.shopee.co.id/4fpxr10mEi"
   }, 

];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function renderProducts(data) {
  productList.innerHTML = "";

  if (data.length === 0) {
    productList.innerHTML = `<div class="not-found">Produk tidak ditemukan 😢</div>`;
    return;
  }

  data.forEach(item => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${item.image}"loading="lazy">
        <div class="product-info">
          <h3>${item.name}</h3>
          <div class="price">${item.price}</div>
          <a href="${item.link}" target="_blank" class="buy-btn">
            BELI
          </a>
        </div>
      </div>
    `;
  });
}

// tampilkan semua produk awal
renderProducts(products);

// search realtime
searchInput.addEventListener("keyup", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});
