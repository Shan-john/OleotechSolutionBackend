const model = require("../model/HomepageModel");
const fs = require("fs");
// GET: Homepage Data
const gethomepagedata = async (req, res) => {
  try {
    const data = await model.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: e.message
    });
  }
};

// POST: Set Homepage Data
const sethomepagedata = async (req, res) => {
    try {
      const {
        projectdonecount,
        happyclientcount,
        employeecount,
        aboutus,
        project
      } = req.body;
  
      const uploadedImages = req.files?.map(file => file.path); // ["uploads/homepage/xxx.png"]
  
      const aboutData = typeof aboutus === 'string' ? JSON.parse(aboutus) : aboutus;
      let projectArray = typeof project === 'string' ? JSON.parse(project) : project;
      
      // ✅ Convert file paths to full URLs
      if (projectArray && uploadedImages && projectArray.length === uploadedImages.length) {
        projectArray = projectArray.map((item, index) => ({
          ...item,
          image: `${req.protocol}://${req.get('host')}/${uploadedImages[index].replace(/\\/g, '/')}`
        }));
      }
      try {
         const tempdata = await model.findOne({});
       tempdata?.project?.map((e)=>{
      if(e.image){
      const oldPath = `${e.image}`;
      
      const imageName = `uploads/homepage/${oldPath.split('/').pop()}`;
       try {
      if (fs.existsSync(imageName)) {
        
           fs.unlinkSync(imageName);
       
          }
          } catch (error) {
           console.log( error)
        }
         
         
        
     
    }
  })
      } catch (error) {
        console.log(error);
      }
         
       
 

  
      const data = await model.findOneAndUpdate(
        {},
        {
          projectdonecount,
          happyclientcount: happyclientcount,
          employeecount: employeecount,
          aboutus: aboutData,
          project: projectArray
        },
        {
          new: true,
          runValidators: true,
          upsert: true
        }
      );
  
      return res.status(201).json({
        success: true,
        message: "Homepage data with project image URLs saved successfully",
        data
      });
  
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error: e.message
      });
    }
  };
  

module.exports = { gethomepagedata, sethomepagedata,  };