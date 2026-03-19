import type { Currency } from '@/types/kitchen'

export function formatPrice(amount: number, currency: Currency = 'EUR'): string {
  const formatters: Record<Currency, Intl.NumberFormat> = {
    EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }),
    CZK: new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }),
  }
  return formatters[currency].format(amount)
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(isoDate))
}
