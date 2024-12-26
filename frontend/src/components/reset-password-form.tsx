import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetPasswordFormSchema } from "@/types/schema";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/lib/api";

interface ResetPasswordFormProps {
  code: string;
}

const ResetPasswordForm = ({ code }: ResetPasswordFormProps) => {
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof resetPasswordFormSchema>) => {
    const password = data.password;
    resetUserPassword.mutate({ verificationCode: code, password });
  };

  const resetUserPassword = useMutation({
    mutationFn: resetPassword,
  });

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Change your password
        </h1>
        {resetUserPassword.isSuccess ? (
          <div className="mb-4 border p-10 rounded-lg">
            <div className="font-small">
              Password reset successfully.{" "}
              <Link to={"/login"}>
                <span className="font-medium hover:underline text-blue-500">
                  Login
                </span>
                Login
              </Link>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
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
  );
};

export default ResetPasswordForm;
