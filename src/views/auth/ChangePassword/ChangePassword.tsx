import DashboardBreadcrumb from "@/components/shared/DashboardBreadcrumb";
import { config } from "./ChangePassword.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const ChangePassword = () => {
  const [oldPasswordToggle, setOldPasswordToggle] = useState<boolean>(false);
  const [newPasswordToggle, setNewPasswordToggle] = useState<boolean>(false);
  const [changePassword, { isLoading, isError, error }] =
    useChangePasswordMutation();

  const defaultValue = config.FORM_DEFAULT_VALUE;

  const form = useForm<z.infer<typeof config.FORM_SCHEMA>>({
    resolver: zodResolver(config.FORM_SCHEMA),
    defaultValues: {
      ...defaultValue,
    },
  });

  const onSubmit = async (data: z.infer<typeof config.FORM_SCHEMA>) => {
    try {
      const res = await changePassword({ ...data }).unwrap();

      if (res) {
        toast.success("Successfully Password Changed", {
          id: "login",
          duration: 2000,
        });
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DashboardBreadcrumb />

      <div className="relative">
        <div className="flex items-center justify-center py-12 px-5">
          <div className=" grid gap-6 w-full max-w-md mt-5 lg:mt-0 lg:border p-10 rounded-md bg-gradient-to-br from-[#F2F5FB] to-[#EAF0FB] lg:shadow-md shadow-gray-200">
            <div className="grid gap-2 ">
              <h1 className="text-xl font-bold text-primary">
                {config.staticText.title}
              </h1>
              <p className="text-muted-foreground text-wrap text-sm">
                {config.staticText.subTitle}
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="oldPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Old password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="pr-10 h-12"
                            placeholder="Type your password"
                            type={oldPasswordToggle ? "text" : "password"}
                            {...field}
                          />
                          {oldPasswordToggle ? (
                            <IoEyeOutline
                              onClick={() =>
                                setOldPasswordToggle(!oldPasswordToggle)
                              }
                              className="absolute bottom-4 right-4 text-xl cursor-pointer"
                            />
                          ) : (
                            <IoEyeOffOutline
                              onClick={() =>
                                setOldPasswordToggle(!oldPasswordToggle)
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
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="pr-10 h-12"
                            placeholder="Type your password"
                            type={newPasswordToggle ? "text" : "password"}
                            {...field}
                          />
                          {newPasswordToggle ? (
                            <IoEyeOutline
                              onClick={() =>
                                setNewPasswordToggle(!newPasswordToggle)
                              }
                              className="absolute bottom-4 right-4 text-xl cursor-pointer"
                            />
                          ) : (
                            <IoEyeOffOutline
                              onClick={() =>
                                setNewPasswordToggle(!newPasswordToggle)
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
                    {(error as any)?.data?.message}
                  </p>
                )}

                <Button disabled={isLoading} type="submit" size={"full"}>
                  {isLoading ? "Loading..." : config.staticText.submitBtnText}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
