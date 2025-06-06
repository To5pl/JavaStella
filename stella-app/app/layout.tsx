import './globals.css'
import type { Metadata } from 'next'

import React from 'react';
import NavBar from '@/app/NavBar';
import { ProfileContextProvider } from '@/app/store/ProfileContextProvider';
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabio Biondi',
  description: 'My First Next site',
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <ProfileContextProvider>
      <body className={raleway.className}>
        <NavBar />
        {children}
      </body>
    </ProfileContextProvider>

    </html>
  )
}