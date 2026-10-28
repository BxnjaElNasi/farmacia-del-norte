# Farmacia del Norte

Este proyecto está pensado como una plataforma moderna para administrar una farmacia con focus en productos, inventario, ventas y reportes.

## Stack recomendado
- Next.js 14
- Tailwind CSS
- Prisma ORM
- Neon PostgreSQL
- Vercel deployment

## Estructura inicial
- Landing page pública
- Login con roles
- Dashboard principal
- Módulos: productos, stock, ventas, proveedores, reportes
- Diseño responsivo y moderno

## Configuración de Neon
1. Crea una base de datos en Neon.
2. Copia `.env.example` a `.env.local`.
3. Completa la variable `DATABASE_URL` con tu string de conexión.
4. Ejecuta:

```bash
npx prisma generate
npx prisma db push
```

## Scripts
```bash
npm install
npm run dev
```

## Variables de entorno
- `DATABASE_URL` = conexión PostgreSQL de Neon
- `NEXTAUTH_URL` = http://localhost:3000
- `NEXTAUTH_SECRET` = secreto para autenticación

## Repositorio actual
- GitHub: `https://github.com/BxnjaElNasi/farmacia-del-norte`

## Próximo paso recomendado
Conectar la app a Neon y luego reemplazar datos mock por datos reales desde Prisma.
