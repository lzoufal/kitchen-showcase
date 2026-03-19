import { cn } from '@/lib/utils/cn'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  onClick?: undefined
  type?: undefined
  disabled?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-stone-950 text-cream hover:bg-gold',
  secondary: 'bg-gold text-cream hover:bg-gold-dark',
  outline: 'border border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-cream',
  ghost: 'text-stone-950 hover:text-gold',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-3 px-8 text-xs',
  lg: 'py-4 px-10 text-sm',
}

const base = 'inline-flex items-center justify-center font-jost font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer'

export function Button({ variant = 'primary', size = 'md', className, children, href, onClick, type = 'button', disabled }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
