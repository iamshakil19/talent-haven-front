import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { CiSearch } from "react-icons/ci";
import { config } from "./Jobs.config";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setAllJobsFilter,
  setAllJobsSearchTerm,
} from "@/redux/features/job/jobSlice";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { RxChevronDown } from "react-icons/rx";
import { useEffect, useState } from "react";
import { mergeFilters } from "@/utils/margeFilters";

const JobFilterSidebar = () => {
  const dispatch = useAppDispatch();

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleCategoryChange = (data: string) => {
    setSelectedCategory((prevCategories) => {
      if (prevCategories.includes(data)) {
        return prevCategories.filter((category) => category !== data);
      } else {
        return [...prevCategories, data];
      }
    });
  };

  const isCategorySelected = (category: string): boolean => {
    return selectedCategory.includes(category);
  };

  const { searchTerm, filter } = useAppSelector(
    (state) => state.job.allJobsPage
  );

  const mergedFilters = mergeFilters(filter);

  const categoryArray = mergedFilters?.category?.split(",");

  useEffect(() => {
    if (categoryArray?.length > 0) {
      setSelectedCategory((prevCategories) => {
        const newCategories = categoryArray.filter(
          (category) => !prevCategories.includes(category)
        );
        return [...prevCategories, ...newCategories];
      });
    } else {
      setSelectedCategory([]);
    }
  }, [mergedFilters?.category]);

  const jobTypeArray = mergedFilters?.type?.split(",");
  const locationArray = mergedFilters?.location?.split(",");
  const experienceArray = mergedFilters?.experience?.split(",");

  return (
    <div className="bg-[#f3f6ff8c] hidden lg:block p-6 rounded-md">
      {/* Search */}
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="search" className="font-medium text-base">
          {config.jobFilter.search.label}
        </Label>

        <div className="relative">
          <CiSearch className="absolute left-3 text-muted-foreground text-xl top-[50%] -translate-y-2/4" />
          <Input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => dispatch(setAllJobsSearchTerm(e.target.value))}
            placeholder={config.jobFilter.search.placeholder}
            className="!ring-1 py-3 pl-10"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="grid w-full max-w-sm items-center gap-3 mt-7">
        <Label className="font-medium text-base">
          {config.jobFilter.category.label}
        </Label>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="!ring-0 !ring-offset-0 h-11 !outline-none border justify-between !bg-white w-full hover:bg-transparent"
              >
                <span className="text-sm font-normal">Category</span>{" "}
                <RxChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              {config.jobFilter.category.options?.map((option, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  checked={isCategorySelected(option.value)}
                  onCheckedChange={() => {
                    dispatch(
                      setAllJobsFilter({
                        ...option,
                        name: config.jobFilter.category.name,
                      })
                    );
                    handleCategoryChange(option.value);
                  }}
                >
                  {option.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Job Type Filter */}
      <div className="grid w-full max-w-sm items-center gap-5 mt-7">
        <Label className="text-base">{config.jobFilter.type.label}</Label>

        {config.jobFilter.type.options?.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Switch
              defaultChecked={jobTypeArray?.includes(option.value)}
              id={option.value}
              onCheckedChange={() =>
                dispatch(
                  setAllJobsFilter({
                    ...option,
                    name: config.jobFilter.type.name,
                  })
                )
              }
              className="h-5 w-10"
            />
            <Label htmlFor={option.value} className="cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </div>

      {/* <RadioGroup
        defaultValue="all"
        className="grid w-full max-w-sm items-center gap-5 mt-7"
      >
        <Label className="text-base">Date Posted</Label>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all" className="cursor-pointer">
            All
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="1" id="60" />
          <Label htmlFor="60" className="cursor-pointer">
            Last Hour
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="24" id="24" />
          <Label htmlFor="24" className="cursor-pointer">
            Last 24 Hour
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="7" id="7" />
          <Label htmlFor="7" className="cursor-pointer">
            Last 7 Days
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="14" id="14" />
          <Label htmlFor="14" className="cursor-pointer">
            Last 14 Days
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="30" id="30" />
          <Label htmlFor="30" className="cursor-pointer">
            Last 30 Days
          </Label>
        </div>
      </RadioGroup> */}

      {/* Location Filter */}
      <div className="grid w-full max-w-sm items-center gap-5 mt-7">
        <Label className="text-base">{config.jobFilter.location.label}</Label>

        {config.jobFilter.location.options?.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox
              className="h-4 w-4"
              defaultChecked={locationArray?.includes(option.value)}
              id={option.value}
              onCheckedChange={() =>
                dispatch(
                  setAllJobsFilter({
                    ...option,
                    name: config.jobFilter.location.name,
                  })
                )
              }
            />
            <Label htmlFor={option.value} className="cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </div>

      {/* Experience Filter */}
      <div className="grid w-full max-w-sm items-center gap-5 mt-7">
        <Label className="text-base">{config.jobFilter.experience.label}</Label>

        {config.jobFilter.experience.options?.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Switch
              defaultChecked={experienceArray?.includes(option.value)}
              id={option.value}
              onCheckedChange={() =>
                dispatch(
                  setAllJobsFilter({
                    ...option,
                    name: config.jobFilter.experience.name,
                  })
                )
              }
              className="h-5 w-10"
            />
            <Label htmlFor={option.value} className="cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFilterSidebar;
