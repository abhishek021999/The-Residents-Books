import { connect } from "mongoose";
async function Connection(){
    try {
        await connect(process.env.MONGODB_URL)
        console.log("connected to MongoDB");
        
    } catch (error) {
        console.log(error)
    }
}


export{ Connection}