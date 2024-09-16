function searchProduct() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
    fetch('data/jsons/ropa.json')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.productos.filter(producto =>
          producto.nombre.toLowerCase().includes(searchQuery)
        );
        displayProducts(filteredProducts);
      });
  }
  

  function checkout() {
    let total = 0;
    let outOfStockItems = [];
  
    cart.forEach(item => {
      const product = productos.find(producto => producto.id === item.id);
  
      if (product.stock >= item.cantidad) {
        total += item.precio * item.cantidad;
      } else {
        outOfStockItems.push(item.nombre);
      }
    });
  
    if (outOfStockItems.length > 0) {
      alert(`No hay suficiente stock para los siguientes productos: ${outOfStockItems.join(', ')}`);
    } else {
      // Restar stock
      cart.forEach(item => {
        const product = productos.find(producto => producto.id === item.id);
        product.stock -= item.cantidad;
      });
  
      alert(`El total de tu compra es $${total}. ¡Gracias por tu compra!`);
      clearCart();
      saveProducts();  
    }
  }
  
  function saveProducts() {
    fetch('productos.json', {
      method: 'PUT',
      body: JSON.stringify(productos),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  