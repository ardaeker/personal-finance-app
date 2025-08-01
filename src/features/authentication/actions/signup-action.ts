"use server";

import { createClient } from "@/utils/supabase/server";
import { type SignupSchema, signupSchema } from "../schemas";

export async function signupAction(formData: SignupSchema) {
    const parsedFormData = signupSchema.safeParse(formData);

    if (!parsedFormData.success) {
        return { error: "Invalid form data" };
    }

    const { name, email, password } = parsedFormData.data;

    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            },
        },
    });

    if (error) {
        return { error: error.message };
    }

    return { error: null };
}
