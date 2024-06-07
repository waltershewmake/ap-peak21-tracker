# Anti.Prophet Peak21 Tracker

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com)
- [Drizzle](https://orm.drizzle.team)
- [tRPC](https://trpc.io)
- [Sentry](https://sentry.io)
- [PostHog](https://posthog.com)
- [Upstash](https://upstash.com)

## Setup

1. `brew install corepack`

- If you previously installed `pnpm` via a different method, you may need to uninstall it first.

2. `corepack enable`
3. Run `pnpm install`
4. Setup the db with `pnpm db:setup`
5. Run `pnpm dev`
6. Visit [http://localhost:3000](http://localhost:3000)

Run `pnpm db:push` to push the schema to the database during development.

## Contributing

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Commit frequently, using conventional commits
5. Push your branch
6. Create a pull request

## Todo

- [x] Add Clerk
- [x] Add Sentry
- [x] Add PostHog
- [ ] Build the tracker
- [ ] Build the leaderboard
- [ ] Build the landing page
- [ ] Add a user profile & settings
- [ ] Add Skool username to user metadata
- [ ] Cool graphs and stats
- [ ] Add API access with Upstash
- [ ] Share the project with the community
- [ ] AP Admin dashboard to track user commitment
