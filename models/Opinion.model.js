const { Schema, model } = require("mongoose");

const opinionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Es obligatorio inlcuir un nombre'],
      minlength: [3, 'El nombre debe tener min, 3 caracteres']
  
    },
    
    imageUrl: {
      type: String,
      required: [true,'La imagen es obligatoria']
    },

    opinion:{
      type: String,
      minlength: 100,
      trim: true,
    },

  },
  {
  
    timestamps: true,
  }
);

const Opinion = model("Opinion", opinionSchema);

module.exports = Opinion;
