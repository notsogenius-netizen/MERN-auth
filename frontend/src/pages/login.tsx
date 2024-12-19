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
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/lib/api";

export const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).max(50),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50),
});

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    loginUser.mutate(data);
  };

  const loginUser = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/", {
        replace: true,
      });
    },
  });

  return (
    <div className="flex flex-col items-center mt-10 px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account.
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-sm font-light flex justify-end">
                <Link to={"/forgot-password"}>
                  <span className="font-medium text-blue-500 hover:underline">
                    Forgot Password?
                  </span>
                </Link>
              </p>

              <Button className="w-full bg-blue-500 text-white" type="submit">
                Submit
              </Button>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400 flex justify-center gap-1">
                Don&apos;t have an account?
                <Link to={"/register"}>
                  <span className="font-medium text-blue-600 hover:underline">
                    Sign up
                  </span>
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
