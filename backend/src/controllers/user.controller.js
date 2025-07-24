import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Request } from "../models/request.model.js";



const getRecommendedUser=asyncHandler(async(req,res)=>{
    const currentUser=req.user;
    if(!currentUser || !currentUser._id){
        throw new ApiError(401,"Unauthorized request");
    }

    const recommededUsers=await User.find({
        $and:[
            {_id:{$ne:req.user._id}},
            {_id:{$nin:req.user.friends || []}},
            {isOnBoarded:true}
        ]
    }).select("-password -email -isOnBoarded -friends -createdAt -updatedAt -refreshToken");

    return res.
    status(200).
    json(new ApiResponse(200,recommededUsers,"Recommended Users fetched successfully"));
})

const getMyFriends=asyncHandler(async(req,res)=>{
    const currentUser=req.user;
    if(!currentUser || !currentUser._id){
        throw new ApiError(401,"Unauthorized request");
    }

    const user=await User.findById(req.user._id).select("friends").
    populate("friends","username fullname avatar nativeLanguage learningLanguage");      // use populate when you have an array of ids and u want to populate the data in them

    return res
    .status(200)
    .json(new ApiResponse(200,user.friends,"Friends fetched successfully"));

})



export {
    getRecommendedUser,
    getMyFriends
}