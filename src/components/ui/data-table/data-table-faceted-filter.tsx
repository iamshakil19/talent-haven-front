import * as React from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useAppDispatch } from "@/redux/hooks";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  filterValue?: string;
  stateData?: any;
  reduxStateForFilter?: any;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  title,
  stateData,
  filterValue,
  options,
  reduxStateForFilter,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const dispatch = useAppDispatch();
  const { filter: selectedValues } = stateData || {};

  const isInclude = selectedValues?.some(
    (value: any) => value.name === filterValue
  );

  return (
    <Popover>
      <PopoverTrigger asChild className="">
        <Button
          variant={`${isInclude ? "default" : "outline"}`}
          size="sm"
          className="h-8 border-dashed justify-start"
        >
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.length > 0 && isInclude && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="hidden space-x-1 lg:flex">
                {selectedValues?.filter(
                  (item: any) => item.name === filterValue
                )?.length > 2
                  ? isInclude && (
                      <Badge
                        variant="secondary"
                        className="rounded-sm px-1 font-normal"
                      >
                        {
                          selectedValues?.filter(
                            (item: any) => item.name === filterValue
                          )?.length
                        }{" "}
                        selected
                      </Badge>
                    )
                  : selectedValues
                      ?.filter((item: any) => item.name === filterValue)
                      ?.map((selectedItem: any) => {
                        return (
                          selectedValues?.filter(
                            (item: any) => item.name === filterValue
                          )?.length < 3 &&
                          isInclude && (
                            <Badge
                              variant="secondary"
                              key={selectedItem.value}
                              className="rounded-sm px-1 font-normal capitalize"
                            >
                              {selectedItem.label}
                            </Badge>
                          )
                        );
                      })}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-10" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options?.map((option) => {
                const isSelected = selectedValues.some(
                  (item: any) => item.value === option.value
                );

                return (
                  <CommandItem
                    className="cursor-pointer py-1.5"
                    key={option.value}
                    onSelect={() =>
                      dispatch(
                        reduxStateForFilter({ ...option, name: filterValue })
                      )
                    }
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
