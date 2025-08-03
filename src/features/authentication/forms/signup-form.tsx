"use client";
import { useRouter } from "next/navigation";

import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Description, ErrorMessage, Field, Label } from "@/components/form/field";

import { useForm } from "react-hook-form";
import { minDelay } from "@/utils/min-delay";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupAction } from "@/features/authentication/actions";
import { signupSchema, SignupSchema } from "@/features/authentication/schemas";

export function SignupForm() {
  const router = useRouter();

  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignupSchema) {
    const { error } = await minDelay(signupAction(values), 500);

    if (error) {
      if (error.code === "VALIDATION_ERROR") {
        if (!error?.details?.properties) return;

        Object.entries(error.details.properties).forEach(([field, fieldError]) => {
          if (fieldError?.errors?.length) {
            form.setError(field as keyof SignupSchema, {
              message: fieldError.errors[0],
            });
          }
        });
      }

      return;
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Field>
        <Label>Name</Label>
        <Input type="text" {...form.register("name")} />
        {form.formState.errors.name && <ErrorMessage>{form.formState.errors.name.message}</ErrorMessage>}
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="email" {...form.register("email")} />
        {form.formState.errors.email && <ErrorMessage>{form.formState.errors.email.message}</ErrorMessage>}
      </Field>
      <Field>
        <Label>Create Password</Label>
        <Input type="password" {...form.register("password")} />
        {form.formState.errors.password && <ErrorMessage>{form.formState.errors.password.message}</ErrorMessage>}
        <Description>Passwords must be at least 8 characters</Description>
      </Field>
      <Button type="submit" className="mt-4 w-full">
        Create Account
      </Button>
    </form>
  );
}
