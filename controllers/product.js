const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
  const searchQuery = makeSearchProductsQuery(req.query);

  try {
    const products = await searchQuery.exec();
    let message = 'Products fetched.'

    if (products.length === 0) message = 'No product found.';

    res.status(200).json({
      message,
      products
    });
  } catch (err) {
    next(err);
  }
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
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error('Cannot find a plant with that ID.');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: 'Product fetched.',
      product
    });
  } catch (err) {
    next(err);
  }
};

// Private

const makeSearchProductsQuery = queryParams => {
  const priceMin = queryParams.price_min || 0;
  const priceMax = queryParams.price_max || 9999;
  delete queryParams.price_min;
  delete queryParams.price_max;

  return Product.find({
    ...queryParams,
    price: {
      $gte: priceMin,
      $lt: priceMax
    }
  }).sort({ brand: 1 });
};