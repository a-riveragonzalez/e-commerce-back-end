const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // includes its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock']}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // includes its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock']}]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // todo create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // todo update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // todo delete a category by its `id` value
});

module.exports = router;
