import * as React from 'react';
import { motion } from 'framer-motion';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
        secondary: "bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700",
        outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
        ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
        link: "bg-transparent text-blue-500 underline-offset-4 hover:underline dark:text-blue-400"
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className = '',
      variant = 'default',
      size = 'default',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? 'div' : 'button';

    return (
      <motion.div 
        whileHover={{ scale: 1.03 }} 
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Comp
          ref={ref}
          className={buttonVariants({ variant, size, className })}
          {...props}
        >
          {children}
        </Comp>
      </motion.div>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
