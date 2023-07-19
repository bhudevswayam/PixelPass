import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set('strictQuery', false);

const conn = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL , {useNewUrlParser : true});
    console.log('connected To DB');
  }
  catch(e){
    console.log(e);
  }
};

export default conn;
// .connect()
