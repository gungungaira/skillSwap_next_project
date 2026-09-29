import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Profile from "@/models/Profile";

const myProfile = async (request) => {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const { photo, address, language, experience, availability, teach, learn } =
      await request.json();

    const existingProfile = await Profile.findOne({ userId });
    if (existingProfile) {
      return NextResponse.json(
        { message: "Profile already exists for this user" },
        { status: 400 }
      );
    }

    const createdProfile = await Profile.create({
      userId,
      photo,
      address,
      language,
      experience,
      availability,
      teach,
      learn,
    });

    return NextResponse.json(createdProfile, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

export default {myProfile};