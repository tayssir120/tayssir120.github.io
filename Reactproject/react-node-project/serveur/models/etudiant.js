const mongoose = require("mongoose");
const Pfe = require("./pfe");

const etudiantSchema = new mongoose.Schema({
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


etudiantSchema.pre("remove", function(next) {
  Pfe.find({ etudiant: this.id }, (err, pfes) => {
    if (err) {
      next(err);
    } else if (pfes.length > 0) {
      next(new Error("This etudiant has pfes still"));
    } else {
      next();
    }
  });
});
etudiantSchema.virtual("coverImagePath").get(function() {
  if (this.coverImage != null && this.coverImageType != null ) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString("base64")}`;
  }
});

module.exports = mongoose.model("Etudiant", etudiantSchema);