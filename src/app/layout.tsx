import './globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import Provider from './provider'

export const metadata: Metadata = {
  title: 'Redirect.link',
  description: 'An open source URL shortener.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-[100dvh] bg-secondary font-sans antialiased',
          fontMono.variable,
          fontSans.variable,
        )}
      >
        <Provider>
          {children}
          <Toaster expand={true} richColors />
        </Provider>
      </body>
    </html>
  )
}
