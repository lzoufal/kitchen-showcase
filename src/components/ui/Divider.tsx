import { cn } from '@/lib/utils/cn'

interface DividerProps {
  className?: string
  variant?: 'gold' | 'cream' | 'stone'
}

export function Divider({ className, variant = 'gold' }: DividerProps) {
  const colors = {
    gold: 'bg-gold',
    cream: 'bg-cream-200',
    stone: 'bg-stone-800',
  }

  return (
    <div className={cn('h-px w-16', colors[variant], className)} />
  )
}
