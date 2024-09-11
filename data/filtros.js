function filterByCategory() {
    const selectedCategory = document.getElementById('categoryFilter').value;
  
    fetch('data/jsons/ropa.json')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = selectedCategory === 'all' 
          ? data.productos 
          : data.productos.filter(producto => producto.categoria === selectedCategory);
        
        displayProducts(filteredProducts);
      });
  }