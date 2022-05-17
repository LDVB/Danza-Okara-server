const router = require("express").Router();
const Email = require ('./../models/Email.model')

router.get('/getAllEmail', (req, res) =>{
    
    Email
        .find()
        .select ('subject email text')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

router.get("/getOneEvent/:id", (req, res, next) => {

    const { id } = req.params
  
    Email
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });

module.exports = router;