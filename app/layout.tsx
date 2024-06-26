import './globals.css'
import './reset.css'
import { Rubik } from 'next/font/google'
import TopBar from '@/components/topbar/TopBar'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Metadata } from 'next'

const rubik = Rubik({ 
  subsets: ['cyrillic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Home | Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang='ru'>
      <body className={rubik.className}>
        <div className='wrapper'>
          <TopBar />
            <Header />
            <main>{ children }</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}