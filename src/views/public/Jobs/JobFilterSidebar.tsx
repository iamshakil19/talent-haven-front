import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const JobFilterSidebar = () => {
  const [category, setCategory] = useState<string>("");
  return (
    <div className="bg-[#f3f6ff8c] hidden lg:block p-6 rounded-md">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="search" className="font-medium text-base">
          Search By Keywords
        </Label>
        <Input
          type="text"
          id="search"
          placeholder="Job title, keywords"
          className="!ring-1 py-3"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3 mt-7">
        <Label className="font-medium text-base">Category</Label>
        <Select onValueChange={(e) => setCategory(e)}>
          <SelectTrigger className="py-3">
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Per Page</SelectLabel> */}
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full max-w-sm items-center gap-5 mt-7">
        <Label className="text-base">Job type</Label>

        <div className="flex items-center space-x-2">
          <Switch id="Full-Time" className="h-5 w-10" />
          <Label htmlFor="Full-Time" className="cursor-pointer">
            Full Time
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="Part-Time" className="h-5 w-10" />
          <Label htmlFor="Part-Time" className="cursor-pointer">
            Part Time
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="contract" className="h-5 w-10" />
          <Label htmlFor="contract" className="cursor-pointer">
            Contract
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="internship" className="h-5 w-10" />
          <Label htmlFor="internship" className="cursor-pointer">
            Internship
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="Freelance" className="h-5 w-10" />
          <Label htmlFor="Freelance" className="cursor-pointer">
            Freelance
          </Label>
        </div>
      </div>

      <RadioGroup
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
      </RadioGroup>

      <div className="grid w-full max-w-sm items-center gap-5 mt-7">
        <Label className="text-base">Location</Label>
        <div className="flex items-center space-x-2">
          <Checkbox id="remote" />
          <Label htmlFor="remote" className="cursor-pointer">
            Remote
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="onsite" />
          <Label htmlFor="onsite" className="cursor-pointer">
            Onsite
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="hybrid" />
          <Label htmlFor="hybrid" className="cursor-pointer">
            Hybrid
          </Label>
        </div>
      </div>

      <div className="grid w-full max-w-sm items-center gap-5 mt-7">
        <Label className="text-base">Experience Level</Label>
        <div className="flex items-center space-x-2">
          <Switch id="0" className="h-5 w-10" />
          <Label htmlFor="0" className="cursor-pointer">
            Fresher
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="1" className="h-5 w-10" />
          <Label htmlFor="1" className="cursor-pointer">
            1 Year
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="2" className="h-5 w-10" />
          <Label htmlFor="2" className="cursor-pointer">
            2 Year
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="3" className="h-5 w-10" />
          <Label htmlFor="3" className="cursor-pointer">
            3 Year
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="4" className="h-5 w-10" />
          <Label htmlFor="4" className="cursor-pointer">
            4 Year
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="5" className="h-5 w-10" />
          <Label htmlFor="5" className="cursor-pointer">
            5 or ++
          </Label>
        </div>
      </div>
    </div>
  );
};

export default JobFilterSidebar;
