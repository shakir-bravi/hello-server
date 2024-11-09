import { APIResponse } from "../util/apiresponse.util.js";
import { asyncHandler } from "../util/asynchandler.utis.js";



const Register =  asyncHandler ( async (req,res)=>{


    console.log(req.url);


    res
    .status(200)
    .json(
        new APIResponse("User  Not Registered !!" , "Success" , 202)
    )
    
})



const LoginUser = asyncHandler (async (req,res,next)=>{
    console.log(req.url);


    res
    .status(200)
    .json(
        new APIResponse("Login User Success !!!!" , "Login Succsess" , 202 )
    )
    
})
export {Register , LoginUser}