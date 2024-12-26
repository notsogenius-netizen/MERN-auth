import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).max(50),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50),
});

export const registerFormSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).max(50),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(50),
    confirmPassword: z
      .string()
      .min(6, { message: "Please confirm your password" }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password does not match.",
        path: ["confirmPassword"],
      });
    }
  });

export const forgotPasswordFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).max(50),
});

export const resetPasswordFormSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50),
});
