import React, { useState } from "react";
import { LoginConfig } from "./Login.config";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/verifyToken";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import AnimatedPageWrapper from "@/hoc";

const Login = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [passwordToggle, setPasswordToggle] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValue = LoginConfig.FORM_DEFAULT_VALUE;

  const form = useForm<z.infer<typeof LoginConfig.FORM_SCHEMA>>({
    resolver: zodResolver(LoginConfig.FORM_SCHEMA),
    defaultValues: {
      ...defaultValue,
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginConfig.FORM_SCHEMA>) => {
    try {
      const res = await login({ ...data }).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: "login", duration: 2000 });
      navigate("/dashboard");
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen relative bg-gradient-to-br from-[#F2F5FB] to-[#EAF0FB]">
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
          <AnimatedPageWrapper>
            <div className="mx-auto grid gap-6 w-full max-w-md mt-14 lg:mt-0 lg:border p-10 rounded-md lg:bg-white lg:shadow-md shadow-gray-200">
              <div className="grid gap-2 ">
                <h1 className="text-3xl font-bold text-primary">
                  {LoginConfig.STATIC_TEXT.HEADING}
                </h1>
                <p className="text-muted-foreground text-wrap">
                  {LoginConfig.STATIC_TEXT.SUB_HEADING}
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
                            className="h-12"
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
                          <div className="relative">
                            <Input
                              className="pr-10 h-12"
                              placeholder="Type your password"
                              type={passwordToggle ? "text" : "password"}
                              {...field}
                            />
                            {passwordToggle ? (
                              <IoEyeOutline
                                onClick={() =>
                                  setPasswordToggle(!passwordToggle)
                                }
                                className="absolute bottom-4 right-4 text-xl cursor-pointer"
                              />
                            ) : (
                              <IoEyeOffOutline
                                onClick={() =>
                                  setPasswordToggle(!passwordToggle)
                                }
                                className="absolute bottom-4 right-4 text-xl cursor-pointer"
                              />
                            )}
                          </div>
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

                  {isError && error && (
                    <p className="text-primary-red text-sm">
                      {(error as any)?.data?.message}
                    </p>
                  )}

                  <Button disabled={isLoading} type="submit" size={"full"}>
                    {isLoading
                      ? "Loading..."
                      : LoginConfig.STATIC_TEXT.SUBMIT_BTN_TEXT}
                  </Button>
                </form>
              </Form>

              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline">
                  Register
                </Link>
              </div>
            </div>
          </AnimatedPageWrapper>
        </div>
      </div>
    </div>
  );
};

export default Login;
