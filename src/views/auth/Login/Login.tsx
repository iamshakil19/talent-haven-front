import React from "react";
import LoginForm from "./LoginForm";
import { LoginConfig } from "./Login.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const defaultValue = LoginConfig.LOGIN_DEFAULT_VALUE;

  const form = useForm<z.infer<typeof LoginConfig.LOGIN_SCHEMA>>({
    resolver: zodResolver(LoginConfig.LOGIN_SCHEMA),
    defaultValues: {
      ...defaultValue,
    },
  });

  const onSubmit = (data: z.infer<typeof LoginConfig.LOGIN_SCHEMA>) => {
    console.log(data);
  };

  return (
    <div className="h-screen relative">
      <img
        onClick={() => navigate("/")}
        src="/public/logo.svg"
        alt="Image"
        className="absolute top-5 left-5 lg:grayscale lg:brightness-[10] cursor-pointer"
      />
      <div className="w-full lg:grid lg:grid-cols-5">
        <div className="hidden bg-muted lg:block col-span-2">
          <img
            src="img/auth/login-bg.jpg"
            alt="Image"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center py-12 col-span-3 px-5">
          <div className="mx-auto grid gap-6 w-full max-w-md mt-14">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold text-primary">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type your email"
                          type="email"
                          {...field}
                        />
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
                          placeholder="Type your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer">
                            Remember Me
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" size={"full"}>
                  {LoginConfig.STATIC_TEXT.SUBMIT}
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
