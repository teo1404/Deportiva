let cart = [];

function addToCart(productId) {

  fetch('data/jsons/ropa.json')
    .then(response => response.json())
    .then(data => {
      const product = data.productos.find(p => p.id === productId);
      

      const cartProduct = cart.find(item => item.id === productId);

      if (cart.length < 5) {
        if (cartProduct) {
          if (cartProduct.cantidad < product.stock) {
            cartProduct.cantidad++;
          } else {
            alert("No hay más stock disponible de este producto.");
          }
        } else {
          cart.push({ ...product, cantidad: 1 });
        }
      } else {
        alert("No puedes añadir más de 5 productos.");
      }

      updateCartCount();
      saveCart();
    });

    function addToCart(productId) {
        const product = productos.find(producto => producto.id === productId);
      
        const cartItem = cart.find(item => item.id === productId);
      
        if (cartItem) {
          if (cartItem.cantidad < product.stock) {
            cartItem.cantidad += 1;
          } else {
            alert(`No hay suficiente stock disponible para ${product.nombre}`);
          }
        } else {
          if (product.stock > 0) {
            cart.push({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: 1 });
          } else {
            alert(`No hay stock disponible para ${product.nombre}`);
          }
        }
      
        updateCartCount();
        saveCart();
      }
      
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.reduce((acc, item) => acc + item.cantidad, 0);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartCount();
  }
}

window.onload = () => {
  loadCart();
  loadProducts();
};

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      cart = JSON.parse(storedCart);
      updateCartCount();
    }
  }
  
  window.onload = () => {
    loadCart();
    loadProducts();
  };
  
  function updateCartCount() {
    let total = 0;
  
    cart.forEach(item => {
      total += item.precio * item.cantidad;
    });
  
    document.getElementById('cartTotal').innerText = `Total: $${total}`;
  }
  