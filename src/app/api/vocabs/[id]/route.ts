import connectMongoDB from "@/libs/mongodb";
import Vocab from "@/models/vocab";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any) {
  try {
    const { id } = params;
    const {
      user_id,
      newEnglish: english,
      newIndonesian: indonesian,
    } = await request.json();
    await connectMongoDB();
    const updated = await Vocab.findByIdAndUpdate(id, {
      user_id,
      english,
      indonesian,
    });
    if (updated) {
      return NextResponse.json({ message: "Vocab updated" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Failed to updated" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: Request, { params }: any) {
  try {
    const { id } = params;
    await connectMongoDB();
    const vocab = await Vocab.findOne({ _id: id });
    if (vocab) {
      return NextResponse.json({ vocab }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Vocab not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const { id } = params;
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
