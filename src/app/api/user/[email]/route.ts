import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  try {
    const { email } = params;
    await connectMongoDB();
    const users = await User.findOne({ email: email });
    if (users) {
      return NextResponse.json({ users }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
  }
}
