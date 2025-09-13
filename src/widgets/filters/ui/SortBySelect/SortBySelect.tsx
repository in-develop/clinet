"use client";

import { useCallback, useMemo } from "react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  SvgIcon,
} from "@/shared/ui";
import { urbanist } from "@/shared/lib/fonts";
import { useFilters } from "@/widgets/filters/hooks";
import { sortByOptions, SortByValue, SortOrder } from "@/widgets/filters/model";

export const SortBySelect = () => {
  const [filters, setFilters] = useFilters();

  const selected = useMemo(() => {
    return sortByOptions.find(
      (el) =>
        el.value === filters.sortBy &&
        (el.order ? el.order === (filters.sortOrder || SortOrder.ASC) : true),
    );
  }, [filters.sortBy, filters.sortOrder]);

  const handleSelect = useCallback(
    (sortBy: SortByValue, sortOrder: SortOrder | null) =>
      setFilters({
        sortBy,
        sortOrder,
      }),
    [setFilters],
  );

  return (
    <div className={"flex flex-1 items-center justify-end gap-4"}>
      <p className={"text-dim-gray text-nowrap"}>Sort By</p>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className={
              "h-10 w-full max-w-[220px] justify-between rounded-none !px-3 data-[state=open]:[&>svg]:-rotate-90"
            }
            size="sm"
          >
            <span className={"truncate"}>{selected?.label}</span>
            <SvgIcon
              name={"arrow-scroll-right"}
              className={"rotate-90 transition-transform"}
              width={16}
              height={16}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="border-light-black min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-none border-t-0 p-0"
          sideOffset={0}
        >
          <DropdownMenuRadioGroup
            value={`${selected?.value}-${selected?.order}`}
          >
            {sortByOptions.map((option) => (
              <DropdownMenuRadioItem
                onSelect={() => handleSelect(option.value, option.order)}
                key={option.label}
                value={`${option.value}-${option.order}`}
                className={`p-3 text-sm leading-none ${urbanist.className} focus:bg-bg-block rounded-none`}
              >
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
