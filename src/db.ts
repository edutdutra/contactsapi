import {config} from "dotenv";
import mongoose from "mongoose";

config()

export default mongoose.connect(process.env.DATABASE_URL!)
    .then(() => console.log('DB connected successfully!'))
    .catch((error) => console.log('DB Erro: ', error))
