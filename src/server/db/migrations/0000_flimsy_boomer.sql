CREATE TABLE
	IF NOT EXISTS "peak21_post" (
		"id" serial PRIMARY KEY NOT NULL,
		"name" varchar(256),
		"created_at" timestamp
		with
			time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
			"updatedAt" timestamp
		with
			time zone
	);

--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "peak21_post" ("name");