import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { name, email } = await request.json();
    await connectMongoDB();
    await User.create({
      name,
      email,
      role: "user",
      plan: "free",
      vocabs: JSON.stringify([]),
    });
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
