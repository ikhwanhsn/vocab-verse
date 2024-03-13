import connectMongoDB from "@/libs/mongodb";
import Vocab from "@/models/vocab";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { user_id, english, indonesian } = await request.json();
    await connectMongoDB();
    const added = await Vocab.create({ user_id, english, indonesian });
    if (added) {
      return NextResponse.json({ message: "Vocab added" }, { status: 201 });
    } else {
      return NextResponse.json({ message: "Failed to added" }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const vocabs = await Vocab.find();
    if (vocabs) {
      return NextResponse.json(vocabs);
    } else {
      return NextResponse.json(
        { message: "Vocabs not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const deleted = await Vocab.findByIdAndDelete(id);
    if (deleted) {
      return NextResponse.json({ message: "Vocabs deleted" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Vocabs not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
