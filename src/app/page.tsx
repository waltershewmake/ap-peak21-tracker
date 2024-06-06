import { Center } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export interface PageProps {}

/**
 * Home page
 */
const Page: React.FC<PageProps> = async ({}) => {
  return (
    <Center h="80vh">
      <Image src="/logo.png" alt="AP Peak 21 logo" fill objectFit="contain" />
    </Center>
  );
};

export default Page;
