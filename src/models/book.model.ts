import { Schema,model } from "mongoose";

export interface IBook {
    id: number;
    title: string;
    author: string;
    summary: string;
}

export const schema = new Schema({
    title :{
        type : String,
        required :true
    },
    author :{
        type:String,
        required:true
    },
    summary :{
        type :String,
        required :true
    }
},
{
    timestamps:true
}
)

export const Books = model<IBook>("books",schema)

