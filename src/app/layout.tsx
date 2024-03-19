import './globals.css';
import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';

import AuthProvider from '@/components/providers/AuthProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';

import NavBar from '@/components/NavBar';
import LateralBar from '@/components/initialPage/LateralBar';
import { Toaster } from '@/components/ui/sonner';

import ProgressBarProvider from '@/components/providers/ProgressBarProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const fontSans = FontSans({
  subsets: ['latin'],
  // variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontSans.className,
        )}
      >
        <ProgressBarProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen flex-col items-center justify-start w-full">
                <NavBar />
                <div className="w-full flex flex-col justify-start items-center max-w-7xl flex-1 ">
                  <div className="w-full items-start flex flex-1">
                    <LateralBar />
                    <div className="w-full flex-1 h-full">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
