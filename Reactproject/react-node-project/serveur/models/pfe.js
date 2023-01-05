const mongoose = require("mongoose");


const pfeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,  
  }, 
  releaseDate: {
    type: String,
    required: true
  }, 
  createdAt:{
    type: String,
    required: true,
  },
  
});
pfeSchema.virtual("coverImagePath").get(function() {
  if (this.coverImage != null && this.coverImageType != null ) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString("base64")}`;
  }
});

module.exports = mongoose.model("Pfe", pfeSchema);
