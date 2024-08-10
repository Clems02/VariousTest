import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    className?: string;
  };

export const buttonVariants = cva(
  "inline-flex items-center transition-colors justify-center rounded-md cursor-pointers px-3 py-1.5 ring-indigo-400 focus:ring focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 shadow hover:bg-gray-800",
        ghost: "bg-transparent text-gray-950 hover:bg-gray-200",
        secondary: "bg-gray-200 text-gray-950 hover:bg-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Button = ({ children, className, variant }: ButtonType) => {
  return (
    <button className={buttonVariants({ className, variant })}>
      {children}
    </button>
  );
};
