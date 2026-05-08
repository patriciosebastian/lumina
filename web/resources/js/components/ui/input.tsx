import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-border file:text-ink placeholder:text-ink-2/50 selection:bg-gold/20 selection:text-ink flex h-10 w-full min-w-0 rounded-[4px] border bg-bg px-3 py-2 font-book text-[15px] text-ink shadow-none transition-[border-color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-gold focus-visible:ring-0",
        "aria-invalid:border-amber",
        className
      )}
      {...props}
    />
  )
}

export { Input }
