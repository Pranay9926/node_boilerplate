import { UsersModel } from "../database/sequelize/userModel";
import { generateSalt, hashPassword } from "../utils/hashedPassword";

export const createUser = async (req: any) => {
  const salt = generateSalt();
  const hashedpassword = hashPassword(req?.body.password, salt);
  try {
    const user = await UsersModel.create({
      ...req.body,
      password: hashedpassword,
      salt: salt,
    });
    console.log(user, 'userrr');
    if (user) return user;
  } catch (error: any) {
    return { status: 400, error: error.errors[0].message };
  }
};


export const getUserDetails = async (userId: any) =>
  await UsersModel.findOne({
    where: {
      id: userId,
      isActive: true,
    },
  });
