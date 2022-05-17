const router = require("express").Router();
const Image = require ('./../models/Image.model')

router.get('/getAllImage', (req, res) =>{
    
    Image
        .find()
        .select ('imageUrl')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

router.get("/getOneImage/:id", (req, res, next) => {

    const { id } = req.params
  
    Image
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });

module.exports = router;