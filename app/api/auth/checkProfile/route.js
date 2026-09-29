import authController from "@/lib/controller/checkProfile"

export async function GET(request) {
  return authController.getProfile(request)
}