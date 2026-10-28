import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const result = await prisma.$queryRaw`SELECT 1 as ok`;

    return NextResponse.json({
      ok: true,
      database: 'Neon PostgreSQL',
      result
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Database connection failed'
      },
      { status: 500 }
    );
  }
}
