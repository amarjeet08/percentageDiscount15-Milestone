const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = (originalPrice - discountedPrice) / originalPrice;
    const discountPercentage = discount * 100;
    return discountPercentage.toFixed(2);
  };
  
  const originalPrice = 500;
  const discountedPrice = 399;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  document.getElementById('discount-percentage').textContent = `${discountPercentage}%`;