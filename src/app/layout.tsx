import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';

import { ClerkProvider } from '@clerk/nextjs';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '~/styles/theme';
import { TRPCReactProvider } from '~/trpc/react';

import '@mantine/core/styles.css';
import { CSPostHogProvider } from '~/app/_analytics/provider';

export const metadata = {
  title: 'AP Peak 21 Tracker',
  description: 'Track your Peak 21 progress',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <head>
            <ColorSchemeScript />
          </head>
          <body className={GeistSans.className}>
            <TRPCReactProvider>
              <MantineProvider theme={theme} forceColorScheme="light">
                {children}
              </MantineProvider>
            </TRPCReactProvider>
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
