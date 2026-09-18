import authController from "@/lib/controller/loginController"

export async function POST(request) {
  return authController.login(request);
}
