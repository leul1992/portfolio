import * as React from 'react';

const buttonVariants = (variant, size) => {
  const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-muted text-secondary-foreground hover:bg-muted/80',
    outline: 'border border-input hover:bg-muted/80',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-11 w-11',
  };

  return `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${
    sizeClasses[size] || sizeClasses.default
  }`;
};

const Button = React.forwardRef(
  ({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'div' : 'button'; // Replace 'Slot' with 'div' as a default fallback

    return (
      <Comp
        className={`${buttonVariants(variant, size)} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
