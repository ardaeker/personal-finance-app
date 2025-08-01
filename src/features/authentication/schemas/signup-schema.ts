import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(2, {
        error: "Can't be empty",
    }),
    email: z.email({
        error: "Invalid email address",
    }),
    password: z.string().min(8, {
        error: "Password must be at least 8 characters long.",
    }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
