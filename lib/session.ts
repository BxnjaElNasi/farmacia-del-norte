import { createHash } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const SESSION_COOKIE = 'farmacia_session';

export function hashPassword(password: string) {
  return createHash('sha256')
    .update(`${password}${process.env.NEXTAUTH_SECRET ?? 'local-dev-secret'}`)
    .digest('hex');
}

export function signSession(payload: Record<string, string>) {
  return Buffer.from(JSON.stringify(payload)).toString('base64url');
}

export function parseSession() {
  const sessionCookie = cookies().get(SESSION_COOKIE)?.value;

  if (!sessionCookie) {
    return null;
  }

  try {
    const raw = Buffer.from(sessionCookie, 'base64url').toString('utf8');
    return JSON.parse(raw) as { id: string; email: string; role: string; name: string };
  } catch {
    return null;
  }
}

export function requireSession() {
  const session = parseSession();

  if (!session) {
    redirect('/login');
  }

  return session;
}

export function setSessionCookie(session: Record<string, string>) {
  const value = signSession(session);
  cookies().set(SESSION_COOKIE, value, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8
  });
}

export function clearSessionCookie() {
  cookies().set(SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0
  });
}
