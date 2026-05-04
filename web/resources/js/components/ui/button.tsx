import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        luminaPrimary: "text-base font-semibold text-neutral hover:cursor-pointer bg-linear-to-br from-secondary-gradient from-5% via-secondary-300 via-30% to-primary-gradient to-100% border border-primary-500 hover:bg-linear-to-b hover:from-[#A8E4FF] hover:from-0% hover:via-none hover:to-primary-500 transition-colors ease-in",
        luminaPrimaryAlt: "text-base font-semibold text-neutral hover:cursor-pointer border border-primary-500 bg-linear-to-r from-secondary-gradient to-primary-gradient hover:text-secondary-950 hover:bg-linear-to-b hover:from-[#A8E4FF] hover:to-primary-500 transition-colors ease-in",
        luminaSecondary: "text-base font-semibold text-primary-300 hover:cursor-pointer bg-linear-to-b from-[#54C0F100] to-[#54C0F133] relative z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-lg before:bg-gradient-to-b before:from-[#54C0F199] before:to-[#54C0F100] before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]",
        luminaSecondaryAlt: "text-base font-semibold text-primary-300 hover:cursor-pointer bg-linear-to-b from-[#54c0f100] to-[#54C0F133] border border-t-primary-600 border-r-primary-300 border-l-primary-300 border-b-primary-200",
        luminaInputBox:"font-semibold text-lg text-primary-700 hover:cursor-pointer bg-linear-to-b from-[#54C0F100] to-[#54C0F133] border border-primary-700 shadow-medium-shadow peer-focus-within:bg-[#031E2A] transition-colors",
        luminaGhost: "hover:text-primary-100",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        luminaPrimary: "w-[180px] h-14 rounded-[8px] px-6 py-4",
        luminaNav: "w-[105px] h-[45px] rounded-[8px] px-4 py-3",
        luminaDropdown: "w-[281px] h-[45px] rounded-[8px] px-4 py-3",
        luminaInputBox: "w-[313px] h-[72px] lg:w-[640px] px-5 py-4 rounded-b-[8px] rounded-t-none gap-3.5",
      },
    },
    defaultVariants: {
      variant: "luminaPrimary",
      size: "luminaPrimary",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
