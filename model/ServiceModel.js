const mongoose = require("mongoose");

const Servicedata = new mongoose.Schema({
    heading: {
        type: String,
         
      },
      description: {
        type: String,
        
      },
})
 
// Define the schema for services
const serviceSchema = new mongoose.Schema({
   services:[Servicedata]

})
// Create and export the model
const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
