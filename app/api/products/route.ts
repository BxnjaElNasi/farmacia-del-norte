import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const payload = await request.json();

  const product = await prisma.product.create({
    data: {
      sku: String(payload.sku ?? ''),
      name: String(payload.name ?? ''),
      category: String(payload.category ?? 'General'),
      description: payload.description ? String(payload.description) : null,
      price: Number(payload.price ?? 0),
      cost: Number(payload.cost ?? 0),
      stock: Number(payload.stock ?? 0),
      minimum: Number(payload.minimum ?? 0),
      status: payload.status === 'BAJO_STOCK' ? 'BAJO_STOCK' : 'ACTIVO',
      supplierId: payload.supplierId ? String(payload.supplierId) : null
    }
  });

  return NextResponse.json(product, { status: 201 });
}
