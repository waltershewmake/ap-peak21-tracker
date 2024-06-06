import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '~/styles/theme';
import { TRPCReactProvider } from '~/trpc/react';

import '@mantine/core/styles.css';

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
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={GeistSans.className}>
        <TRPCReactProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
