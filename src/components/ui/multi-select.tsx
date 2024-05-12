import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { useCallback, useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange?: (values: string[]) => void;
  isResetFrom?: boolean;
}

const MultiSelect = ({ options, onChange, isResetFrom }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleUnselect = useCallback(
    (value: string) => {
      setSelected((prev) => {
        const newSelected = prev.filter((s) => s !== value);
        if (onChange) onChange(newSelected); // Trigger onChange with updated selection
        return newSelected;
      });
    },
    [onChange]
  );

  const handleSelect = useCallback(
    (value: string) => {
      setInputValue("");
      setSelected((prev) => [...prev, value]);
      if (onChange) onChange([...selected, value]);
    },
    [onChange, selected]
  );

  useEffect(() => {
    // if (isResetFrom) {
    setSelected([]);
    // }
  }, [isResetFrom]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (
          (e.key === "Delete" || e.key === "Backspace") &&
          input.value === ""
        ) {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            if (onChange) onChange(newSelected);
            return newSelected;
          });
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [onChange]
  );

  const notSelected = options.filter(
    (option) => !selected.includes(option.value)
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 bg-background transition-all duration-200">
        <div className="flex flex-wrap gap-1">
          {selected?.map((value) => {
            const label = options.find(
              (option) => option.value === value
            )?.label;
            return (
              <Badge
                key={value}
                variant="secondary"
                className="bg-secondary-blue text-primary-blue hover:bg-secondary-purple hover:text-primary transition-all duration-300 ease-in-out h-7 tracking-wider"
              >
                {label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 "
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleUnselect(value);
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  tabIndex={0}
                  onClick={() => handleUnselect(value)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select frameworks..."
            className=" flex-1 py-1 outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && notSelected?.length > 0 && (
          <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandList>
              <CommandGroup className="h-full overflow-auto">
                {notSelected?.map((option) => (
                  <CommandItem
                    key={option.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => handleSelect(option.value)}
                    className="cursor-pointer"
                  >
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </div>
    </Command>
  );
};

export default MultiSelect;
