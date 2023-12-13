import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next MongoDB',
  description: 'NextJS MongoDB Web Based Client',
}

type Props = { children: React.ReactNode }
export default function Layout({ children }: Props) {
  return (
    <html lang="en" dir='ltr'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
