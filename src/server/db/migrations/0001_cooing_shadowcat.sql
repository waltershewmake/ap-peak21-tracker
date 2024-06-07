-- Custom SQL migration file, put you code below! --
INSERT INTO
  "peak21_habit" ("name", "start_date")
VALUES
  ('Hydrate Your Body', '2024-06-05'),
  ('Build Muscles', '2024-06-06'),
  ('Stop Snoozing', '2024-06-07'),
  ('You Need a Network', '2024-06-08'),
  ('Track Your Spending', '2024-06-09'),
  ('Unlock Mental Clarity', '2024-06-10'),
  ('Cut These Out', '2024-06-11'),
  ('Remove The Noise', '2024-06-12'),
  ('Move Your Body', '2024-06-13'),
  ('Broaden Your Intellect', '2024-06-14'),
  ('Analyze Your Vocabulary', '2024-06-15'),
  ('Your First Hour of the Day', '2024-06-16'),
  ('Embrace Radical Honesty', '2024-06-17'),
  ('Express Appreciation', '2024-06-18'),
  ('Make an Impact', '2024-06-19'),
  ('The Power of Asking for Help', '2024-06-20'),
  ('Practice Critical Thinking', '2024-06-21'),
  ('Own Your Voice', '2024-06-22'),
  ('Leave Your Confort Zone', '2024-06-23'),
  ('Gaining Valuable Insights', '2024-06-24'),
  ('Your Peak State', '2024-06-25') ON CONFLICT ("name") DO NOTHING;