# Anti.Prophet Peak21 Tracker

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com)
- [Drizzle](https://orm.drizzle.team)
- [tRPC](https://trpc.io)
- [Sentry](https://sentry.io)
- [PostHog](https://posthog.com)
- [Upstash](https://upstash.com)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## Setup

1. Clone the repository
2. Run `pnpm install`
3. Clone `.env.example` to `.env` and update the password within the database URL
4. Setup the db with `pnpm db:setup`
5. Run `pnpm dev`

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
- [ ] Add Sentry
- [ ] Add PostHog
- [ ] Build the tracker
- [ ] Build the leaderboard
- [ ] Add a user profile & settings
- [ ] Add Skool username to user metadata
- [ ] Cool graphs and stats
- [ ] Add API access with Upstash
- [ ] Share the project with the community
