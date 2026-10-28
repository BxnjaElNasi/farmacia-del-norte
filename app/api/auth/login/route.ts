import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, setSessionCookie } from '@/lib/session';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? '').trim().toLowerCase();
  const password = String(body.password ?? '');

  if (!email || !password) {
    return NextResponse.json({ error: 'Correo y contraseña requeridos' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  const hash = hashPassword(password);

  if (user.passwordHash !== hash) {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  setSessionCookie({
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name
  });

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  });
}
