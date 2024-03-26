import mongoose from "mongoose";
import {User} from "../dtos/User";

const UserSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password_hash: {
        type: String,
        required: true,
    }
})

export const USER = mongoose.model('User', UserSchema);
