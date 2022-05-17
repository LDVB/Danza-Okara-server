const router = require("express").Router();
const Moment = require ('./../models/Moments.model')

router.get('/getAllMoment', (req, res) =>{
    
    Moment
        .find()
        .select ('name imageUrl date description ')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

router.get("/getOneMoment/:id", (req, res, next) => {

    const { id } = req.params
  
    Moment
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });

module.exports = router;