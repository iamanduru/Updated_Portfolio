import React from 'react'
import clsx from 'clsx'

/**
 * Props:
 * - variant: 'default' | 'ghost' | 'outline' | 'destructive' | 'link'
 * - size: 'default' | 'sm' | 'lg' | 'icon'
 * - className: additional classes
 * - children: button content (or an <a> if you use asChild)
 */
export default function Button({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center font-medium rounded-md',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    'ring-offset-background'
  )

  const variants = {
    default:    'bg-teal-500 text-white-900 hover:bg-amber-400 focus:ring-teal-200',
    ghost:      'bg-transparent hover:bg-teal-500 hover:text-white-900 focus:ring-ring',
    outline:    'border border-amber-400 bg-transparent hover:bg-amber-500 hover:text-teal-900 focus:ring-ring',
    destructive:'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive',
    link:       'text-pink-500 underline-offset-4 hover:underline focus:ring-ring',
  }

  const sizes = {
    default: 'px-4 py-2 text-sm',
    sm:      'px-3 py-1 text-sm',
    lg:      'px-6 py-3 text-base',
    icon:    'p-2',
  }

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
