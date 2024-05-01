import DashboardBreadcrumb from "@/components/shared/DashboardBreadcrumb";
import { useAddNewJobMutation } from "@/redux/features/job/jobApi";
import { FormFieldName, config } from "./AddNewJob.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaIdCard } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import "./AddNewJob.css";
import { INPUT_TYPES } from "@/constants/InputTypes";
import { Switch } from "@/components/ui/switch";

const AddNewJob = () => {
  const [addNewJob, { isLoading, isError, error }] = useAddNewJobMutation();

  const defaultValue = config.FORM_DEFAULT_VALUE;

  const form = useForm<z.infer<typeof config.FORM_SCHEMA>>({
    resolver: zodResolver(config.FORM_SCHEMA),
    defaultValues: {
      ...defaultValue,
    },
  });

  const onSubmit = async (data: z.infer<typeof config.FORM_SCHEMA>) => {
    try {
      console.log(data);

      // const res = await addNewJob({ ...data }).unwrap();
      // toast.success("Successfully Job Added", { id: "addNewJob", duration: 2000 });
      // form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const descriptionValue = form.watch("description");

  const invalidString = [
    "<p><br></p>",
    "<h1><br></h1>",
    "<h2><br></h2>",
    "<h3><br></h3>",
    "<h4><br></h4>",
    "<h5><br></h5>",
    "<h6><br></h6>",
  ];

  useEffect(() => {
    if (invalidString?.includes(descriptionValue)) {
      form.setValue("description", "");
    }
  }, [form.watch("description")]);


  const FragmentWithKey = ({ children }: {children: any}) => {
    return <>{children}</>;
  };

  return (
    <div>
      <DashboardBreadcrumb />

      <div className="relative">
        <div className="flex items-center justify-center py-5">
          <div className=" grid gap-3 w-full max-w-6xl lg:border p-5 rounded-md bg-gradient-to-br from-[#f2f5fb81] to-[#eaf0fb7e]">
            <div className="grid gap-2 ">
              <h1 className="text-xl font-bold text-primary-gray">
                {config.staticText.title}
              </h1>
              <p className="text-muted-foreground text-sm text-wrap">
                {config.staticText.subTitle}
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {config.FORM_INPUTS?.map((input, index) => (
                    <FragmentWithKey key={index}>
                      {/* Condition 1 for text */}
                      {input.type === INPUT_TYPES.TEXT &&
                        input.name === "title" && (
                          <FormField
                            control={form.control}
                            name={input?.name as FormFieldName}
                            render={({ field }) => (
                              <FormItem className="col-span-full">
                                <FormLabel>{input.label}</FormLabel>
                                <FormControl>
                                  <Input
                                    className="py-3"
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    {...field}
                                    value={
                                      typeof field.value === "boolean"
                                        ? ""
                                        : field.value
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}

                      {/* Condition 2 for select */}
                      {input.type === INPUT_TYPES.SELECT && (
                        // <div className="">
                        <FormField
                          control={form.control}
                          name={input?.name as FormFieldName}
                          render={({ field }) => (
                            <FormItem className="">
                              <FormLabel>{input.label}</FormLabel>
                              <div className="relative">
                                {input.name === "category" && (
                                  <MdOutlineWorkOutline className="absolute left-3 text-muted-foreground text-xl top-[50%] -translate-y-2/4" />
                                )}
                                {input.name === "type" && (
                                  <LiaIdCard className="absolute left-3 text-muted-foreground text-xl top-[50%] -translate-y-2/4" />
                                )}
                                {input.name === "location" && (
                                  <IoLocationOutline className="absolute left-3 text-muted-foreground text-xl top-[50%] -translate-y-2/4" />
                                )}
                                {input.name === "experience" && (
                                  <RiUserStarLine className="absolute left-3 text-muted-foreground text-xl top-[50%] -translate-y-2/4" />
                                )}

                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value as string}
                                >
                                  <FormControl className="py-3 pl-10">
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder={input.placeholder}
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {input?.options?.map(
                                      (option: any, index: number) => (
                                        <SelectItem
                                          key={index}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </SelectItem>
                                      )
                                    )}
                                  </SelectContent>
                                </Select>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {/* Condition 3 for number */}
                      {input.type === INPUT_TYPES.NUMBER && (
                        <FormField
                          control={form.control}
                          name={input?.name as FormFieldName}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{input.label}</FormLabel>
                              <FormControl>
                                <Input
                                  min={0}
                                  className="py-3"
                                  placeholder={input.placeholder}
                                  type={input.type}
                                  {...field}
                                  value={
                                    typeof field.value === "boolean"
                                      ? ""
                                      : field.value
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {/* Condition 4 for checkbox */}
                      {input.type === INPUT_TYPES.CHECKBOX && (
                        <FormField
                          control={form.control}
                          name={input?.name as FormFieldName}
                          render={({ field }) => (
                            <FormItem className="content-end">
                              <div className="flex items-center space-x-2">
                                <FormControl>
                                  <Switch
                                    checked={field.value as boolean | undefined}
                                    id={input.name}
                                    onCheckedChange={field.onChange}
                                    className="h-5 w-10"
                                  />
                                </FormControl>

                                <FormLabel
                                  htmlFor={input.name}
                                  className="cursor-pointer"
                                >
                                  {input.label}
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      )}

                      {/* Condition 5 for quill text editor */}
                      {input.type === INPUT_TYPES.TEXT &&
                        input.name === "description" && (
                          <FormField
                            control={form.control}
                            name={input?.name as FormFieldName}
                            render={({ field }) => (
                              <FormItem className="col-span-full">
                                <FormLabel>{input.label}</FormLabel>
                                <FormControl>
                                  <ReactQuill
                                    className="bg-background"
                                    theme="snow"
                                    placeholder={input.placeholder}
                                    {...field}
                                    value={
                                      typeof field.value === "boolean"
                                        ? undefined
                                        : field.value
                                    }
                                    modules={config.reactQuillModule}
                                    formats={config.reactQuillFormats}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                    </FragmentWithKey>
                  ))}
                </div>

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

export default AddNewJob;
