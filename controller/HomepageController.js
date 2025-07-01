const model = require("../model/HomepageModel");

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
      ongoingprojectcount,
      activeprojectcount,
      aboutus,
      project
    } = req.body;

    const data = await model.findOneAndUpdate({},{
      projectdonecount,
      ongoingprojectcount,
      activeprojectcount,
      aboutus,
      project
    },{
      new: true, // return the updated document
      runValidators: true  ,// run schema validation
      upsert: true
    });

    return res.status(201).json({
      success: true,
      message: "Homepage data saved successfully",
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
