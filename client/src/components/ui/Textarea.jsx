// src/components/ui/Textarea.jsx
import React from 'react'
import clsx from 'clsx'

/**
 * Props:
 *  - className: additional classes
 *  - ...props: standard textarea props
 */
export const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        'flex w-full min-h-[80px] rounded-md border border-input bg-background',
        'px-3 py-2 text-sm placeholder:text-muted-foreground',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
