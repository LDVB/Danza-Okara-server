const { Schema, model } = require("mongoose");

const emailSchema = new Schema(
    {

        email: {
            type: String,
            required: [true, 'El email  es obligatorio'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'por favor, introduce una dirección de email válida'],
            
        },
        subject: {
            type: String,
            required: [true, 'El asunto del email es obligatorio'],
            minlength: [3, 'El asunto debe tener min, 3 caracteres']
        },
        text: {
            type: String,
            required: [true, 'El texto del email es obligatorio'],
            minlength: [3, 'El texto debe tener min, 50 caracteres']
        },
    },
    {
        timestamps: true,
    }
);

const Email = model("Email", emailSchema);

module.exports = Email;
