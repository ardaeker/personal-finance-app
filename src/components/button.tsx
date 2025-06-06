import { classNames } from "@/utils/classNames";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center isolate rounded-lg gap-x-3 p-4 disabled:opacity-50 text-sm",
    "focus:not-focus:outline-hidden focus:outline-2 focus:outline-offset-1 focus:outline-gray-500",
    "transition-colors duration-200",
    "border border-transparent",
    "*:data-[slot=icon]:size-3",
  ],
  {
    variants: {
      variant: {
        plain:
          "text-gray-500 *:data-[slot=icon]:fill-gray-500 hover:text-gray-900 focus-within:text-gray-900 hover:*:data-[slot=icon]:fill-gray-900",
        danger: "bg-red-500 hover:bg-red-500/90 text-white font-bold",
        default: "bg-gray-900 hover:bg-gray-500 text-white font-bold",
        secondary: "bg-beige-100 hover:bg-white hover:border-beige-500 text-gray-900 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {}

export function Button({ variant, className, ...rest }: ButtonProps) {
  return <button className={classNames(buttonVariants({ variant, className }))} {...rest} />;
}
