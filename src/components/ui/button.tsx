import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary-dark shadow-sm",
      outline: "border border-primary text-primary hover:bg-primary/10 bg-transparent",
      ghost: "hover:bg-primary/10 text-primary bg-transparent",
      secondary: "bg-secondary text-primary-dark hover:bg-secondary/80",
    }
    
    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-12 px-8 text-lg font-medium",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
