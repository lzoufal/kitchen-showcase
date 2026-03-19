import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'dark' | 'light'
  className?: string
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variants = {
    gold: 'bg-gold text-cream',
    dark: 'bg-stone-950 text-cream',
    light: 'bg-cream-100 text-stone-700',
  }

  return (
    <span className={cn('inline-block font-jost text-xs font-medium tracking-widest uppercase px-3 py-1', variants[variant], className)}>
      {children}
    </span>
  )
}
