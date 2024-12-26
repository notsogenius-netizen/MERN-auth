import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendPasswordResetEmail } from "@/lib/api";
import { forgotPasswordFormSchema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { z } from "zod";

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof forgotPasswordFormSchema>) => {
    resetPassword.mutate(data.email);
  };

  const resetPassword = useMutation({
    mutationFn: sendPasswordResetEmail,
    onSuccess: () => {},
  });

  return (
    <div className="flex flex-col items-center mt-10 px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Reset your password
          </h1>
          {resetPassword.isSuccess ? (
            <div className="mb-4 border p-10 rounded-lg">
              <div className="font-small">Email sent successfully.</div>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full bg-blue-500 text-white" type="submit">
                  Reset Password
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
