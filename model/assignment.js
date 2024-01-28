let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//const { Matieres } = require('../../demoapp/src/app/assignement/assignement.model');


let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String,
    noteSur20: Number,
    remarque: String,
    matiere: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('assignments', AssignmentSchema);
