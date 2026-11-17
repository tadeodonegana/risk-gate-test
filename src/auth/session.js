const SESSION_TTL_SECONDS = 3600;

export function isSessionValid(session, now = Date.now()) {
  return now - session.createdAt < SESSION_TTL_SECONDS * 1000;
}
