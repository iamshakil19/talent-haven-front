import React, { useCallback, useEffect, useRef, useState } from "react";

import { INPUT_TYPES } from "@/constants/InputTypes";
import { Switch } from "@/components/ui/switch";
import MultiSelect from "@/components/ui/multi-select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
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
import { useAddNewJobMutation } from "@/redux/features/job/jobApi";
import { FormFieldName, config } from "./AddNewJob.config";

const AddNewJobForm = () => {
  const [addNewJob, { isLoading, isError, error, isSuccess }] =
    useAddNewJobMutation();
  const [isResetFrom, setResetForm] = useState(false);

  const defaultValue = config.FORM_DEFAULT_VALUE;

  const form = useForm<z.infer<typeof config.FORM_SCHEMA>>({
    resolver: zodResolver(config.FORM_SCHEMA),
    defaultValues: {
      ...defaultValue,
    },
  });

  const onSubmit = async (data: z.infer<typeof config.FORM_SCHEMA>) => {
    try {
      const res = await addNewJob({ ...data }).unwrap();
      if (res) {
        toast.success("Successfully Job Added", {
          id: "addNewJob",
          duration: 2000,
        });

        form.reset();
        setResetForm(!isResetFrom);
      }
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

  const FragmentWithKey = ({ children }: { children: any }) => {
    return <>{children}</>;
  };

  const handleFrameworksChange = (selectedValues: string[]) => {
    form.setValue("technology", selectedValues);
    form.clearErrors("technology");
  };

  const technologyValue = form.watch("technology");

  useEffect(() => {
    if (form.formState.isSubmitted && !isSuccess) {
      form.trigger("technology");
    }

    if (technologyValue.length > 0) {
      form.clearErrors("technology");
    } else {
    }
  }, [technologyValue, isSuccess]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.FORM_INPUTS?.map((input, index) => (
              <React.Fragment key={index}>
                {/* Condition 1 for text */}
                {input.type === INPUT_TYPES.TEXT && input.name === "title" && (
                  <FormField
                    control={form.control}
                    name={input?.name}
                    render={({ field }) => (
                      <FormItem className="col-span-1 sm:col-span-2">
                        <FormLabel>
                          {input.label}
                          {input.required && (
                            <span className="text-primary-red text-xl ml-1">
                              *
                            </span>
                          )}
                        </FormLabel>
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
                {input.type === INPUT_TYPES.SELECT &&
                  input.name !== "technology" && (
                    // <div className="">
                    <FormField
                      control={form.control}
                      name={input?.name as FormFieldName}
                      render={({ field }) => (
                        <FormItem className="">
                          <FormLabel>
                            {input.label}{" "}
                            {input.required && (
                              <span className="text-primary-red text-xl ml-1">
                                *
                              </span>
                            )}
                          </FormLabel>
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
                              value={field.value as string}
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
                        <FormLabel>
                          {input.label}{" "}
                          {input.required && (
                            <span className="text-primary-red text-xl ml-1">
                              *
                            </span>
                          )}
                        </FormLabel>
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
                      <FormItem className="content-center">
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
                          <FormLabel>
                            {input.label}{" "}
                            {input.required && (
                              <span className="text-primary-red text-xl ml-1">
                                *
                              </span>
                            )}
                          </FormLabel>
                          <FormControl>
                            <ReactQuill
                              className="bg-background"
                              theme="snow"
                              placeholder={input.placeholder}
                              {...field}
                              value={
                                typeof field.value === "boolean"
                                  ? undefined
                                  : Array.isArray(field.value)
                                  ? field.value.join("\n")
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

                {input.type === INPUT_TYPES.SELECT &&
                  input.name === "technology" && (
                    <FormField
                      control={form.control}
                      name={input.name}
                      render={() => (
                        <FormItem>
                          <FormLabel>
                            {input.label}{" "}
                            {input.required && (
                              <span className="text-primary-red text-xl ml-1">
                                *
                              </span>
                            )}
                          </FormLabel>
                          <FormControl>
                            <MultiSelect
                              options={input.options}
                              onChange={handleFrameworksChange}
                              isResetFrom={isResetFrom}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
              </React.Fragment>
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
  );
};

export default AddNewJobForm;
