import { BookOpenIcon, CirclePlus } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./Button";
import { ReactSvg } from "./ReactSVG";

type CardItemType = {
  url: string;
  name: string;
  category: string;
  hideCategory: boolean;
};

export const CardItem = ({
  category,
  name,
  url,
  hideCategory,
}: CardItemType) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 transition-colors shadow hover:border-gray-300 hover:bg-gray-100 ">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
        <p className="font-bold text-base">React</p>
      </div>
      <div className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold">
        {name}
      </div>
      <div className="flex w-full gap-2 items-center">
        {hideCategory ? null : (
          <div className="line-clamp-1 text-start text-xs text-gray-500">
            {category}
          </div>
        )}
        <div className="flex gap-3 ml-auto">
          <Link href={url} className={buttonVariants({ variant: "secondary" })}>
            <BookOpenIcon size={16} />
          </Link>
          <Button variant={"secondary"}>
            <CirclePlus size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
