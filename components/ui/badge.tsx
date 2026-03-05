 "use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "outline"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const baseClasses =
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors"

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-secondary text-secondary-foreground",
  outline:
    "border-border bg-background text-muted-foreground",
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  )
}

