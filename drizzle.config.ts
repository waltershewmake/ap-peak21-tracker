import { type Config } from 'drizzle-kit';

import { env } from '~/env';

export default {
  schema: './src/server/db/schema.ts',
  migrations: {
    table: 'peak21_migrations',
    schema: 'public',
  },
  out: './src/server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ['peak21_*'],
} satisfies Config;
