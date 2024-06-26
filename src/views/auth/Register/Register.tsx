import { useState } from "react";
import { RegisterConfig } from "./Register.config";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import AnimatedPageWrapper from "@/hoc";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import appConfig from "@/config/app.config";

const Register = () => {
  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const [passwordToggle, setPasswordToggle] = useState(false);
  const navigate = useNavigate();

  const defaultValue = RegisterConfig.FORM_DEFAULT_VALUE;

  const form = useForm<z.infer<typeof RegisterConfig.FORM_SCHEMA>>({
    resolver: zodResolver(RegisterConfig.FORM_SCHEMA),
    defaultValues: {
      ...defaultValue,
    },
  });

  const [userType, setUserType] = useState<string>("candidate");

  const onSubmit = async (data: z.infer<typeof RegisterConfig.FORM_SCHEMA>) => {
    try {
      const res = await register({ ...data, role: userType }).unwrap();

      if (res) {
        toast.success("Successfully Registered", {
          id: "login",
          duration: 2000,
        });
        navigate("/login");

        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen relative bg-gradient-to-br from-[#F2F5FB] to-[#EAF0FB]">
      <img
        onClick={() => navigate("/")}
        src={appConfig.logo}
        alt="Image"
        className="absolute w-48 top-5 left-5 lg:grayscale lg:brightness-[10] cursor-pointer"
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
              <div className="grid gap-2">
                <h1 className="text-3xl font-bold text-primary">
                  {RegisterConfig.STATIC_TEXT.HEADING}
                </h1>
                <p className="text-wrap text-muted-foreground">
                  {RegisterConfig.STATIC_TEXT.SUB_HEADING}
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <Tabs
                    defaultValue="candidate"
                    onValueChange={(e) => setUserType(e)}
                  >
                    <TabsList className="w-full gap-2">
                      <TabsTrigger className="w-full h-full" value="candidate">
                        Candidate
                      </TabsTrigger>
                      <TabsTrigger className="w-full h-full" value="employer">
                        Employer
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="Type your email"
                            type="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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

                  {isError && error && (
                    <p className="text-primary-red text-sm">
                      {(error as any)?.data?.error?.code === 11000
                        ? (error as any)?.data?.errorSources?.[0].message
                        : (error as any)?.data?.message}
                    </p>
                  )}

                  <Button disabled={isLoading} type="submit" size={"full"}>
                    {isLoading
                      ? "Loading..."
                      : RegisterConfig.STATIC_TEXT.SUBMIT_BTN_TEXT}
                  </Button>
                </form>
              </Form>

              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </div>
            </div>
          </AnimatedPageWrapper>
        </div>
      </div>
    </div>
  );
};

export default Register;
