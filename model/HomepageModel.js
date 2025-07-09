const mongoose = require("mongoose");

// Define the project sub-schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
   
  },
  category: {
    type: String,
   
  },
  image: {
    type: String,
   
  },
});
const aboutschema =new mongoose.Schema({
  details:{
    type: String,
    
  },
  fulldetail:{
    type: String,
    
  }
})

// Define the main homepage schema
const oleotechHomeSchema = new mongoose.Schema({
  projectdonecount: {
    type: String,
   
  },
  happyclientcount: {
    type: Number,
   
  },
  employeecount: {
    type: Number,
   
  },
  aboutus:  
    aboutschema
  ,
  project: [projectSchema], // embed the project sub-schema
});

// Create and export the model
const OleotechHome = mongoose.model("OleotechHome", oleotechHomeSchema);
 
 module.exports = OleotechHome ;
