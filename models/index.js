// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// todo Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// todo Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
});

// todo Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: ProductTag 
});

// todo Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
