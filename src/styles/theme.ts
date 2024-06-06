'use client';

import { ActionIcon, createTheme, LoadingOverlay } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'red',
  defaultRadius: 'lg',
  cursorType: 'pointer',
  black: '#09090b',
  white: '#ffffff',
  colors: {
    red: [
      '#ffe7e7',
      '#ffcece',
      '#ff9b9c',
      '#ff6565',
      '#fd3738',
      '#fd1a1b',
      '#fe050a',
      '#e20001',
      '#cb0000',
      '#b10000',
    ],
    dark: [
      '#eeeeee',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#24262B',
      'rgb(24 24 27)',
      '#141517',
      '#101113',
    ],
  },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'transparent',
        color: 'gray',
      },
    }),
    LoadingOverlay: LoadingOverlay.extend({
      defaultProps: {
        style: (theme) => ({
          borderRadius:
            theme.radius[theme.defaultRadius as keyof typeof theme.radius],
          zIndex: 10,
        }),
      },
    }),
  },
});
