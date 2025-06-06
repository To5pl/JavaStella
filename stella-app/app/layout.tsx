import './globals.css'
import type { Metadata } from 'next'

import React from 'react';
import NavBar from '../app/NavBar';
import { LanguageContextProvider } from './store/LanguageContextProvider';
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My first Web Site in Next',
  description: 'Tutorial by Fabio Biondi',
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={raleway.className}>
        <LanguageContextProvider>
          <NavBar />
          {children}
        </LanguageContextProvider>
      </body>
    </html>
  )
}