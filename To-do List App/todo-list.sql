-- database name todo-list
CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "category" VARCHAR(30),
  "task" VARCHAR(100),
  "notes" VARCHAR(500),
  "complete" BOOLEAN
);

INSERT INTO "tasks" ("category", "task", "notes", "complete")
VALUES ('Home', 'Exercise cats', 'Got a new da bird, make their day', 'False'),
('Personal', 'Go to Yoga', 'Make sure to get a run or lifting in beforehand', 'False');