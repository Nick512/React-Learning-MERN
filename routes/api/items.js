const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

//Item Model
const Item = require('../../models/Item')

//@router   GET api/items
//@desc     GET all items
//@access   Public 
router.get('/', (req,res) => {
    Item.find()
       .sort({ date: -1 })
        .then(items => res.json(items))
})

//@router   POST api/items
//@desc     Create A Post
//@access   Private
router.post('/', auth, async (req, res) => {
    const newItem = new Item({
      name: req.body.name
    });
  
    try {
      const item = await newItem.save();
      if (!item) throw Error('Something went wrong saving the item');
  
      res.status(200).json(item);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

//@router   DELETE api/items/:id
//@desc     Delete A Post
//@access   Private 
router.delete('/:id', auth, (req,res) => {
    Item.findById(req.params.id)
      .then(item => item.remove().then( () => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}))
})

module.exports = router
     