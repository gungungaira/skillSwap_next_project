import authController from "@/lib/controller/profileController"

 export async function POST (request ){
  return authController.myProfile(request )
 }