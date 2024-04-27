import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import Vocab from "@/models/vocab";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, english, indonesian } = await request.json();
    const idUser = await User.findOne({ email: email });
    const vocabExists = await Vocab.findOne({
      user_id: idUser.id,
      english: english,
    });
    if (vocabExists) {
      return NextResponse.json(
        { message: "Vocab already exists" },
        { status: 400 }
      );
    }
    if (!idUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    await connectMongoDB();
    const added = await Vocab.create({
      user_id: idUser.id,
      english,
      indonesian,
    });
    if (added) {
      return NextResponse.json(
        { message: "New vocabulary has been added!" },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ message: "Failed to added" }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: any) {
  try {
    await connectMongoDB();
    const { nextUrl } = request;
    const email = nextUrl.searchParams.get("email");
    const user = await User.findOne({ email: email });
    const page = nextUrl.searchParams.get("page");
    const limit = nextUrl.searchParams.get("limit");
    const skip = (page - 1) * limit;
    if (!page || !limit) {
      const vocabs = await Vocab.find({ user_id: user?._id });
      if (vocabs.length > 0) {
        return NextResponse.json(vocabs);
      } else {
        return NextResponse.json(
          { message: "Vocabs not found" },
          { status: 404 }
        );
      }
    } else {
      const vocabs = await Vocab.find({ user_id: user?._id })
        .skip(skip)
        .limit(limit);
      if (vocabs.length > 0) {
        return NextResponse.json(vocabs);
      } else {
        // return NextResponse.json(
        //   { message: "Vocabs not found" },
        //   { status: 404 }
        // );
        return NextResponse.json([]);
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
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
