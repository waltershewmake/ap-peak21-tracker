import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from '~/server/db';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
migrate(db, { migrationsFolder: './src/db/migrations' })
  .then(() => {
    console.log('Migrations complete!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Migrations failed!', err);
    process.exit(1);
  });
