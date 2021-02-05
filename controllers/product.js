const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
};

exports.createProduct = async (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    rating: req.body.rating,
    memory: req.body.memory,
    brand: req.body.brand,
    price: req.body.price
  });

  try {
    const savedProduct = await product.save();
    res.status(201).json({
      message: 'Product successfully created.',
      savedProduct
    });
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {

};
