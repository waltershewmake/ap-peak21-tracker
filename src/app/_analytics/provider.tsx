'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, type PropsWithChildren } from 'react';
import { env } from '~/env';

if (typeof window !== 'undefined' && env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: 'https://app.posthog.com',
  });
}

export function CSPostHogProvider({ children }: PropsWithChildren) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

function PostHogAuthWrapper({ children }: PropsWithChildren) {
  const auth = useAuth();
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        name: userInfo.user.fullName,
        email: userInfo.user.primaryEmailAddress?.emailAddress,
        username: userInfo.user.username,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth, userInfo]);

  return <>{children}</>;
}
