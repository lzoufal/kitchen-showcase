import { Space_Grotesk, Jost } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${spaceGrotesk.variable} ${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-stone-950 antialiased">
        {children}
      </body>
    </html>
  )
}
