const axios = require("axios");
const {
  getFibonacci,
  getPrimes,
  lcmArray,
  hcfArray,
} = require("../utils/mathUtils");

const EMAIL = process.env.EMAIL;


exports.healthCheck = (req,res)=>{
  res.json({
    is_success:true,
    official_email:EMAIL
  });
};



exports.handleBFHL = async (req,res)=>{
 try{

  const body=req.body;

  if(body.fibonacci !== undefined){
    if(body.fibonacci<0)
      return res.status(400).json({is_success:false});

    return res.json({
      is_success:true,
      official_email:EMAIL,
      data:getFibonacci(body.fibonacci)
    });
  }

  
  if(body.prime){
    return res.json({
      is_success:true,
      official_email:EMAIL,
      data:getPrimes(body.prime)
    });
  }

  
  if(body.lcm){
    return res.json({
      is_success:true,
      official_email:EMAIL,
      data:lcmArray(body.lcm)
    });
  }

  
  if(body.hcf){
    return res.json({
      is_success:true,
      official_email:EMAIL,
      data:hcfArray(body.hcf)
    });
  }

if (body.AI) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_KEY}`,
      {
        contents: [
          {
            parts: [{ text: body.AI }]
          }
        ]
      }
    );

    let answer =
      response.data.candidates[0].content.parts[0].text;

    answer = answer.split(" ")[0];

    return res.json({
      is_success: true,
      official_email: EMAIL,
      data: answer
    });

  } catch (err) {
    console.log(err.response?.data || err.message);

    return res.status(500).json({
      is_success: false,
      error: err.response?.data || err.message
    });
  }
}


  return res.status(400).json({is_success:false});

 }catch(err){
  console.log(err.response?.data || err.message);

  return res.status(500).json({
    is_success:false
  });
 }
};
