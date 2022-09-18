const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  const productFilterByPrice = products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
  return productFilterByPrice;
}

function getProductById(id) {
  const productFilterById = products.filter((product) => product.id === id);
  return productFilterById;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById, 
};
