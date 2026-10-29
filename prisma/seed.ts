import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';

const prisma = new PrismaClient();

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

  const branch1 = await prisma.branch.upsert({
    where: { code: 'FN-SUR' },
    update: {},
    create: {
      name: 'Sucursal Sur',
      code: 'FN-SUR',
      address: 'Av. Central 145',
      city: 'Lima',
      phone: '+51 987 123 456',
      email: 'sur@farmacialdnorte.com',
      status: 'ACTIVA'
    }
  });

  const branch2 = await prisma.branch.upsert({
    where: { code: 'FN-NORTE' },
    update: {},
    create: {
      name: 'Sucursal Norte',
      code: 'FN-NORTE',
      address: 'Jr. Comercio 87',
      city: 'Trujillo',
      phone: '+51 942 321 456',
      email: 'norte@farmacialdnorte.com',
      status: 'ACTIVA'
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

  const products = [
    {
      sku: 'PAR-500',
      name: 'Paracetamol 500mg',
      category: 'Analgésicos',
      description: 'Medicamento analgésico para aliviar dolor y fiebre.',
      price: 18.5,
      cost: 8.2,
      stock: 128,
      minimum: 20,
      status: 'ACTIVO',
      supplierId: supplier.id
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
      status: 'BAJO_STOCK',
      supplierId: supplier.id
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
      status: 'CRITICO',
      supplierId: supplier.id
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
      status: 'ACTIVO',
      supplierId: supplier.id
    }
  ];

  for (const product of products) {
    const created = await prisma.product.upsert({
      where: { sku: product.sku },
      update: {},
      create: {
        sku: product.sku,
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
        cost: product.cost,
        stock: product.stock,
        minimum: product.minimum,
        status: product.status,
        supplierId: product.supplierId
      }
    });

    for (const branch of [branch1, branch2]) {
      await prisma.branchProduct.upsert({
        where: {
          branchId_productId: {
            branchId: branch.id,
            productId: created.id
          }
        },
        update: {},
        create: {
          branchId: branch.id,
          productId: created.id,
          stock: branch.code === 'FN-SUR' ? Math.max(8, Math.floor(product.stock / 2)) : Math.max(6, Math.floor(product.stock / 3)),
          minStock: product.minimum
        }
      });
    }
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
      branchId: branch1.id,
      customerId: customer.id,
      total: 96.0,
      status: 'COMPLETADO',
      paymentMethod: 'Tarjeta',
      items: {
        create: [
          {
            productId: (await prisma.product.findUnique({ where: { sku: 'PAR-500' } }))!.id,
            quantity: 3,
            unitPrice: 18.5,
            subtotal: 55.5
          }
        ]
      }
    }
  });

  console.log('Seed completed:', { admin: admin.email, branches: [branch1.code, branch2.code], sale: sale.id });
}

main().finally(async () => {
  await prisma.$disconnect();
});
