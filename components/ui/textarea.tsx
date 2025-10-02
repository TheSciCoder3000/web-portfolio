import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textareaVariant = cva("", {
  variants: {
    variant: {
      default: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      ),
      vscode:
        "w-full bg-[#0d1117] text-[#c9d1d9] placeholder-[#6e7681] border border-[#30363d] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariant>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariant({ variant, className }))}
      {...props}
    />
  );
}

export { Textarea };
