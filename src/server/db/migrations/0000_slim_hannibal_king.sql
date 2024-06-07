CREATE TABLE IF NOT EXISTS "peak21_habit" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"start_date" date NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "peak21_habit_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "peak21_user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"skool_id" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "peak21_user_skool_id_unique" UNIQUE("skool_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "peak21_users_to_habits" (
	"user_id" uuid NOT NULL,
	"habit_id" serial NOT NULL,
	CONSTRAINT "peak21_users_to_habits_user_id_habit_id_pk" PRIMARY KEY("user_id","habit_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "peak21_users_to_habits" ADD CONSTRAINT "peak21_users_to_habits_user_id_peak21_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."peak21_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "peak21_users_to_habits" ADD CONSTRAINT "peak21_users_to_habits_habit_id_peak21_habit_id_fk" FOREIGN KEY ("habit_id") REFERENCES "public"."peak21_habit"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
