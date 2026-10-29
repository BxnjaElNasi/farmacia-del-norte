import { createHash } from 'crypto';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productList: Array<{
  sku: string;
  name: string;
  category: string;
  description: string;
  price: number;
  cost: number;
  stock: number;
  minimum: number;
  status: Prisma.ProductStatus;
}> = [
  {
    sku: 'PAR-500',
    name: 'Paracetamol 500mg',
    category: 'Analgésicos',
    description: 'Medicamento analgésico para aliviar dolor y fiebre.',
    price: 18.5,
    cost: 8.2,
    stock: 128,
    minimum: 20,
    status: 'ACTIVO'
  },
  {
    sku: 'VIT-1000',
    name: 'Vitamina C 1000mg',
    category: 'Vitaminas',
    description: 'Complemento vitamínico para reforzar defensas.',
    price: 26.9,
    cost: 12.3,
    stock: 42,
    minimum: 45,
    status: 'BAJO_STOCK'
  },
  {
    sku: 'AMX-500',
    name: 'Amoxicilina 500mg',
    category: 'Antibióticos',
    description: 'Antibiótico para infecciones comunes.',
    price: 32.4,
    cost: 15.6,
    stock: 12,
    minimum: 20,
    status: 'CRITICO'
  },
  {
    sku: 'IBU-400',
    name: 'Ibuprofeno 400mg',
    category: 'Dolor e inflamación',
    description: 'Analgésico antiinflamatorio para alivio del dolor.',
    price: 24.0,
    cost: 11.5,
    stock: 80,
    minimum: 18,
    status: 'ACTIVO'
  }
];

async function main() {
  const adminEmail = 'admin@farmacialdnorte.com';
  const adminPassword = '123456';

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Administrador Farmacia del Norte',
      passwordHash: createHash('sha256').update(`${adminPassword}farmacia-del-norte-secret-dev-change-me`).digest('hex'),
      role: 'ADMIN'
    }
  });

  const supplier = await prisma.supplier.upsert({
    where: { name: 'Distribuidora Salud Plus' },
    update: {},
    create: {
      name: 'Distribuidora Salud Plus',
      contact: 'Julio Álvarez',
      phone: '+51 998 112 334',
      category: 'Medicamentos'
    }
  });

  for (const product of productList) {
    await prisma.product.upsert({
      where: { sku: product.sku },
      update: {},
      create: {
        ...product,
        supplierId: supplier.id
      }
    });
  }

  const customer = await prisma.customer.upsert({
    where: { email: 'cliente@demo.com' },
    update: {},
    create: {
      name: 'Cliente Demo',
      email: 'cliente@demo.com',
      phone: '+51 999 123 456'
    }
  });

  const sale = await prisma.sale.create({
    data: {
      total: 96.0,
      status: 'COMPLETADO',
      paymentMethod: 'Tarjeta',
      customerId: customer.id,
      items: {
        create: [
          {
            productId: (await prisma.product.findUnique({ where: { sku: 'PAR-500' } }))!.id,
            quantity: 3,
            unitPrice: 18.5
          }
        ]
      }
    }
  });

  console.log('Seed completed:', { admin: admin.email, supplier: supplier.name, sale: sale.id });
}

main().finally(async () => {
  await prisma.$disconnect();
});
