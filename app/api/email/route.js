import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  ConnectDB();
};

LoadDB();

//POST API Endpoint
export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}

//GET API Endppint
export async function GET(request){
  const emails = await EmailModel.find({})
  return NextResponse.json({emails})
}

//DELETE API Endpoint
export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({success:true, msg: "Email Deleted"})
}