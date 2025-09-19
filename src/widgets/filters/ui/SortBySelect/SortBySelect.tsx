"use client";

import { useCallback, useMemo } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { cn } from "@/shared/lib/utils";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  SvgIcon,
} from "@/shared/ui";
import { useSortingQueryState } from "@/widgets/filters/hooks";
import {
  SORT_BY_OPTIONS,
  SortByValue,
  SortOrder,
} from "@/widgets/filters/model";

interface ISortBySelectProps {
  isMobile?: boolean;
  unsavedSorting?: { sortBy: SortByValue; sortOrder: SortOrder | null };
  onSortingChange?: (
    _sortBy: SortByValue,
    _sortOrder: SortOrder | null,
  ) => void;
}

export const SortBySelect = ({
  isMobile = false,
  unsavedSorting,
  onSortingChange,
}: ISortBySelectProps) => {
  const [sortingState, setSortingState] = useSortingQueryState();

  const currentSorting =
    isMobile && unsavedSorting ? unsavedSorting : sortingState;

  const selected = useMemo(() => {
    return SORT_BY_OPTIONS.find(
      (el) =>
        el.value === currentSorting.sortBy &&
        (el.order
          ? el.order === (currentSorting.sortOrder || SortOrder.ASC)
          : true),
    );
  }, [currentSorting]);

  const handleSelect = useCallback(
    (sortBy: SortByValue, sortOrder: SortOrder | null) => {
      if (isMobile && onSortingChange) {
        onSortingChange(sortBy, sortOrder);
      } else {
        setSortingState({
          sortBy,
          sortOrder,
        });
      }
    },
    [isMobile, onSortingChange, setSortingState],
  );

  return (
    <div
      className={cn(
        "flex-1 items-center justify-end gap-4",
        !isMobile && "hidden sm:flex",
      )}
    >
      {!isMobile && <p className={"text-dim-gray text-nowrap"}>Sort By</p>}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className={cn(
              "h-10 w-full max-w-[220px] justify-between rounded-none !px-3 data-[state=open]:[&>svg]:-rotate-90",
              isMobile &&
                `${urbanist.className} group w-full max-w-none justify-start gap-2 text-left normal-case`,
            )}
            size="sm"
          >
            {isMobile && (
              <span className={"text-dim-gray group-hover:text-current"}>
                Sort by
              </span>
            )}
            <span className={cn("truncate", isMobile && "flex-1")}>
              {selected?.label}
            </span>
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
            {SORT_BY_OPTIONS.map((option) => (
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
