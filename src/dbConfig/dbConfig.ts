import mongoose from "mongoose";

connect();
export async function connect(){
    try{
          const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected successfully');
        })

        connection.on('error',(err)=>{
            console.log('error in connecting the database' +err);
            process.exit();

        })

    } catch (error){
        console.log(error);
        
    }
}
