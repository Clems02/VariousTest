import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

type MenuFilterType = {
  filters: string[];
  currentFilter: string;
};

export const MenuFilter = ({ filters, currentFilter }: MenuFilterType) => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem isActive={!currentFilter} filter="">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem
          key={filter}
          isActive={currentFilter === filter}
          filter={filter}
        >
          {filter}
        </MenuItem>
      ))}
    </nav>
  );
};

type MenuItem = {
  filter: string;
  isActive: boolean;
} & PropsWithChildren;

export const MenuItem = ({ filter, isActive, children }: MenuItem) => {
  return (
    <Link
      className={clsx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        {
          "font-bold": isActive,
        }
      )}
      href={filter ? `/?filter=${filter}` : "/"}
    >
      {children}
    </Link>
  );
};
