const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use('/event', require('./eventos.routes'))
router.use('/galeria', require('./galeria.routes'))
router.use('/opiniones', require('./opiniones.routes'))
router.use('/contactanos', require ('./contactanos.routes'))
router.use('/momentos', require('./moment.routes'))


module.exports = router;
