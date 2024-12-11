import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Freelance Web Developer | React & Next.js & exoress.js & mongodb & ORM & prisma ... Expert',
   description:
      'Professional web development services. Specializing in React, Next.js, and scalable web apps. Hire me for your project.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <link rel="icon" href="/jsm-logo.png" sizes="any" />
         </head>
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
