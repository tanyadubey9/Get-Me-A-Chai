"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
import User from "@/models/User"

export const initiate = async(amount, to_username, paymentform) => {
    await connectDB()
    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret

    var instance = new Razorpay({key_id: user.razorpayid, key_secret: secret})

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)

    //create a payment object  which shows a pending payment in the database
    await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message})
    return x
}

export const fetchuser = async ( username) => {
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchpayments = async (username) =>{
    await connectDB()
    // find all payments sorted by the decreasing order of amount and flatten object Ids
    let p = await Payment.find({to_user: username, done: true}).sort({amount: -1}).limit(10).lean()
    return p 
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)
    // if the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
    let u = await User.findOne({username: ndata.username})
    if (u) {
        return { error: "Username already exists" }
    }
    await User.updateOne({email: ndata.email}, ndata)
    //Now uodate all the usernames in the Payments table
    await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
    }
    else {
        // update the user
        await User.updateOne({email: ndata.email}, ndata)
    }
}