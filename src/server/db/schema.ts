// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm';
import {
  date,
  pgTableCreator,
  primaryKey,
  serial,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `peak21_${name}`);

export const habits = createTable('habit', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull().unique(),
  startDate: date('start_date', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const usersToHabits = createTable(
  'users_to_habits',
  {
    userId: uuid('user_id').notNull(),
    habitId: serial('habit_id')
      .notNull()
      .references(() => habits.id),
    completedOn: date('completed_on', { mode: 'string' }),
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.userId, t.habitId],
    }),
  })
);
