import API from "@/config/apiClient";

// type LoginParams = {
//   email: string;
//   password: string;
// };

export const login = async (data: any) => await API.post("/auth/login", data);

export const createAccount = async (data: any) =>
  await API.post("/auth/register", data);

export const verifyEmail = async (verificationCode: string | undefined) =>
  await API.get(`/auth/email/verify/${verificationCode}`);
