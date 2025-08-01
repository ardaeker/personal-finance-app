"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { type SignupSchema, signupSchema } from "../schemas";

export async function signupAction(formData: SignupSchema) {
    const validation = signupSchema.safeParse(formData);

    if (!validation.success) {
        const errorTree = z.treeifyError(validation.error);

        return {
            error: {
                code: "VALIDATION_ERROR",
                details: errorTree,
            },
        };
    }

    const { name, email, password } = validation.data;

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
