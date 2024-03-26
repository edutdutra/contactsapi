import mongoose from "mongoose";

export interface Contact {
    name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
    birth_date: string;
    user: mongoose.Types.ObjectId;
}
