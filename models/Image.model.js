const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    name: {
      type: String,
    },
    
    imageUrl: {
      type: String,
      required: [true,'La imagen es obligatoria']
    }

  },
  {
  
    timestamps: true,
  }
);

const Image = model("Image", imageSchema);
module.exports = Image;