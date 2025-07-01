const model = require("../model/ServiceModel");

const getservice = async (req, res) => {
  try {
    const data = await model.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: e.message,
    });
  }
};



 

const updateservice = async (req,res) =>{

    try{
        
        const {services} = req.body;
        const data =await  model.findOneAndUpdate({},{services} ,{
            new: true, // return the updated document
      runValidators: true  ,// run schema validation
      upsert: true  // This will create the doc if it doesn't exist
     
        })
        if (!data) {
            return res.status(404).json({
              success: false,
              message: "Document not found"
            });
          }
      
          res.status(200).json({
            success: true,
            message: "Homepage data updated successfully",
            data: data
          });
    }catch(e){

    }
}


module.exports = { getservice,updateservice };

