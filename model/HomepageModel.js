const mongoose = require("mongoose");

// Define the project sub-schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const aboutschema =new mongoose.Schema({
  details:{
    type: String,
    required: true,
  },
  fulldetail:{
    type: String,
    required: true,
  }
})

// Define the main homepage schema
const oleotechHomeSchema = new mongoose.Schema({
  projectdonecount: {
    type: String,
    required: true,
  },
  happyclientcount: {
    type: Number,
    required: true,
  },
  employeecount: {
    type: Number,
    required: true,
  },
  aboutus:  
    aboutschema
  ,
  project: [projectSchema], // embed the project sub-schema
});

// Create and export the model
const OleotechHome = mongoose.model("OleotechHome", oleotechHomeSchema);
 
 module.exports = OleotechHome ;
