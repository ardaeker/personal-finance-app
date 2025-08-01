"use client";

import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Description, ErrorMessage, Field, Label } from "@/components/form/field";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupSchema } from "../schemas";
import { signupAction } from "../actions";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const router = useRouter();

  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "Arda Eker",
      email: "ardaekereu@gmail.com",
      password: "test1234",
    },
  });

  async function onSubmit(values: SignupSchema) {
    const { error } = await signupAction({
      name: "",
      email: "",
      password: "",
    });

    if (!error) {
      router.push("/");
    }

    console.log(error);

    return;
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
