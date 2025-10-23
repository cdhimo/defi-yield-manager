import React from "react"
import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-mint-light text-forest-dark hover:bg-sage hover:text-mint-pale",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-mint-light text-mint-light hover:bg-mint-light hover:text-forest-dark",
  secondary: "bg-forest-medium text-mint-pale hover:bg-sage",
  ghost: "hover:bg-mint-light hover:text-forest-dark",
  link: "text-mint-light underline-offset-4 hover:underline",
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
