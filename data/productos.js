async function loadProducts() {
    const response = await fetch('data/jsons/ropa.json');
    const data = await response.json();
    displayProducts(data.productos);
  }
  
  function displayProducts(productos) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; 
  
    productos.forEach(producto => {
      productsContainer.innerHTML += `
        <div class="product-card">
          <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio}</p>
          <button onclick="addToCart(${producto.id})">Añadir al Carrito</button>
        </div>
      `;
    });
  }
  
  window.onload = loadProducts;
  