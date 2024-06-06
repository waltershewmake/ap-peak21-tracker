'use client';

import {
  Group,
  Image,
  type ImageProps,
  Text,
  useMantineColorScheme,
} from '@mantine/core';

export interface LogoProps extends Partial<ImageProps> {
  withText?: boolean;
}

/**
 * Renders the Peak21 logo based on color scheme
 */
const Logo = ({ withText = false, ...props }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group wrap="nowrap" gap={5}>
      <Image
        alt="Peak21 logo"
        height={45}
        src={colorScheme === 'dark' ? 'logo-white.png' : 'logo-black.png'}
        {...props}
      />
      {withText && (
        <Text
          fw={700}
          size="lg"
          c={colorScheme === 'dark' ? 'lightgray' : 'dark'}
        >
          bizOp
        </Text>
      )}
    </Group>
  );
};

export default Logo;
