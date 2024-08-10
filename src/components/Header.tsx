import { ShoppingBasket, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { ReactSvg } from "./ReactSVG";

type HeaderType = {};

export const Header = (props: HeaderType) => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center font-bold text-lg gap-2">
        <ReactSvg size={32} />
        <span>React Journey</span>
      </h1>
      <div className="flex items-centers ml-auto gap-2">
        <Button variant={"ghost"} className="border text-gray-700">
          <Link href={"/other"}>Other App</Link>
        </Button>
        <Button variant={"ghost"} className="border text-gray-700">
          <Link href={"/timer"}>Timer</Link>
        </Button>
        <Button variant={"ghost"}>
          <ShoppingBasket />
        </Button>
        <Button variant={"ghost"}>
          <User />
        </Button>
      </div>
    </header>
  );
};
