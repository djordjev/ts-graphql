CREATE TABLE "Users" (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role VARCHAR(255) DEFAULT 'user',
  password VARCHAR(255)
);
