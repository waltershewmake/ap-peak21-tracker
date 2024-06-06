import { Center } from '@mantine/core';
import React from 'react';
import Logo from '~/components/Logo';

export interface PageProps {}

/**
 * Home page
 */
const Page: React.FC<PageProps> = async ({}) => {
  return (
    <Center h="80vh">
      <Logo height={400} />
    </Center>
  );
};

export default Page;
