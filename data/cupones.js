const validCoupons = {
    "DEPORTES10": 0.1,  // 10% de descuento
    "DEPORTES20": 0.2   // 20% de descuento
  };
  
  function applyCoupon() {
    const couponCode = document.getElementById('couponInput').value;
  
    if (validCoupons[couponCode]) {
      const discount = validCoupons[couponCode];
      let total = 0;
  
      cart.forEach(item => {
        total += item.precio * item.cantidad;
      });
  
      const totalWithDiscount = total * (1 - discount);
      alert(`Cupón aplicado! El total con descuento es: $${totalWithDiscount.toFixed(2)}`);
    } else {
      alert("Cupón inválido");
    }
  }
  