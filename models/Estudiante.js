const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Estudiante = new Schema({
    idDocumento: {
        type: Number
    },
    noControl: {
        type: Number
    },
    nombre: {
        type: String
    },
    grado: {
        type: String
    },
    grupo: {
        type: String
    },
   /* CAMPOS DE CALIFICACIONES */

   idCalificacion: {
     type: String
   },
   materia: {
        type: String
    },
   calificacion: {
        type: Number
   },


}, {
    collection: 'estudiantes'
})

module.exports = mongoose.model('Estudiante', Estudiante)
