import { z } from "zod";

export const signupSchema = z.object({
    name: z.string()
        .trim()
        .min(2, {
            error: "Can't be empty",
        }).max(50, {
            error: "Name must be at most 50 characters long.",
        })
        .regex(/^[\p{L}'\-\s]+$/u, {
            error: "Use only letters, apostrophes, hyphens, and spaces.",
        })
        .transform((val) => val.replace(/\s+/g, " "))
        .transform((val) => val.normalize("NFC")),

    email: z.email({
        error: "Invalid email address",
    }).max(254, {
        error: "Email must be at most 254 characters long.",
    }).trim(),
    password: z.string().min(8, {
        error: "Password must be at least 8 characters long.",
    }).max(128, {
        error: "Password must be less than 128 characters.",
    }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
