const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      // if we are not using one argument of the resolver function we need to called _
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productById:(_,args)=>{
        return productsModel.getProductById(args.id); 
    }
  },
};
