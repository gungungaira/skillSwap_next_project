import User from "@/models/User";
import "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registration = async (request) => {
  try {
    const { name, email, password } = await request.json();
    const createRegistration = await User.findOne({ email });
    if (createRegistration) {
      return Response.json(
        {message: "email is already used try to login again"},
        {status:200}
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
     return Response.json(user,{status:200});
  } catch (error) {
    return Response.json({ message: error.message },{status:401});
  }
};
const login = async (request) => {
  try {
    const { email, password } = await request.json();
    const createLogin = await User.findOne({ email });
    if (!createLogin) {
      return Response.json({
        message: "user not fount go to registration page",
      },
      {status:401}
    );
    }

    const checkHash = await bcrypt.compare(password, createLogin.password);
    if(!checkHash ){
        return Response.json({message:"email and password both are not found"},{status:401})
    }

    const token =jwt.sign({
      userId: createLogin._id,
      email: createLogin.email,
    },
    
        process.env.JWT_SECRET,
    {
        expiresIn:'1h'
    }
);
     return Response.json({
    token:token,
     message:"invalid token"
  },
  { status: 200 } 
);
  } catch (error) {
    return Response.json({ message: error.message },{status:401});
  }
};

const authController = { registration, login };
export default authController;
