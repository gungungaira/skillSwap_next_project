import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Profile from "@/models/Profile";

const getUserId = (request) => {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  if (!token) return null;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.userId;
};

const getProfile = async (request) => {
  try {
    const userId = getUserId(request);
    if (!userId) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return NextResponse.json({ message: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json({ profile, message: "get successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

const authController = { getProfile };
export default authController;