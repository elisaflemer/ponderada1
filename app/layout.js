import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['300','400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  )
}
