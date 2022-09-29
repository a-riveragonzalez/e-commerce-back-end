const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // includes its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock']}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // todo find a single tag by its `id`
  // todo be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // todo create a new tag
});

router.put('/:id', (req, res) => {
  // todo update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // todo delete on tag by its `id` value
});

module.exports = router;
