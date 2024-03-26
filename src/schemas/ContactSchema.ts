import mongoose, {Schema} from "mongoose";
import {Contact} from "../dtos/Contact";

const ContactSchema = new mongoose.Schema<Contact>({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    birth_date: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

export const CONTACT = mongoose.model('Contact', ContactSchema);
