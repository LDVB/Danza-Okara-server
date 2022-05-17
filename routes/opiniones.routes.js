const router = require("express").Router();
const Opinion = require ('./../models/Opinion.model')

router.get('/getAlOpinion', (req, res) =>{
    
    Opinion
        .find()
        .select ('name imageUrl opinion')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

router.get("/getOneOpinion/:id", (req, res, next) => {

    const { id } = req.params
  
    Opinion
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });

module.exports = router;