-- Speed up the login lookup by email.
CREATE INDEX CONCURRENTLY users_email_lower_idx ON users (lower(email));
