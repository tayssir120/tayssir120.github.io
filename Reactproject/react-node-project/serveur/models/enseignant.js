const mongoose = require("mongoose");


const enseignantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  DateofBirth :{
    type: String,
    required: true
  },
  placeofBirth :{
    type: String,
  },
  description: {
    type: String,  
  },
});

/*enseignantSchema.pre("remove", function(next) {
  Pfe.find({ enseignant: this.id }, (err, pfes) => {
    if (err) {
      next(err);
    } else if (pfes.length > 0) {
      next(new Error("This etudiant has pfes still"));
    } else {
      next();
    }
  });
});*/

enseignantSchema.virtual("coverImagePath").get(function() {
  if (this.coverImage != null && this.coverImageType != null ) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString("base64")}`;
  }
});

module.exports = mongoose.model("Enseignant", enseignantSchema);