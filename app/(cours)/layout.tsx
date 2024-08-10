import { PropsWithChildren } from "react";

export default function RouteLayout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-full justify-center items-center">
      {props.children}
    </div>
  );
}
