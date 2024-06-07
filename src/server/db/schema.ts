// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from 'drizzle-orm';
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

export const users = createTable('user', {
  id: uuid('id').primaryKey(),
  skoolId: varchar('skool_id', { length: 256 }).unique() /* Skool Username */,
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const habits = createTable('habit', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull().unique(),
  startDate: date('start_date', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersToHabits: many(usersToHabits),
}));

export const habitsRelations = relations(habits, ({ many }) => ({
  habitsToUsers: many(usersToHabits),
}));

export const usersToHabits = createTable(
  'users_to_habits',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id),
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

export const usersToHabitsRelations = relations(usersToHabits, ({ one }) => ({
  habit: one(habits, {
    fields: [usersToHabits.habitId],
    references: [habits.id],
  }),
  user: one(users, {
    fields: [usersToHabits.userId],
    references: [users.id],
  }),
}));
