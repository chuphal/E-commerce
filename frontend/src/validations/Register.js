import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});
