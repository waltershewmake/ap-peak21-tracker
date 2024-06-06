import { type Config } from 'drizzle-kit';

import { env } from '~/env';

export default {
  schema: './src/server/db/schema.ts',
  migrations: {
    table: 'ap-peak21-tracker_migrations',
    schema: 'public',
  },
  out: './src/server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ['ap-peak21-tracker_*'],
} satisfies Config;
