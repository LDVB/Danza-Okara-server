const { Schema, model } = require("mongoose");

const momentSchema = new Schema(
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

    description:{
      type: String,
      trim: true,
    },

    date: {
        type: Date,
        default: Date.now
    },

  },
  {
  
    timestamps: true,
  }
);

const Moment = model("Moment", momentSchema);

module.exports = Moment;
