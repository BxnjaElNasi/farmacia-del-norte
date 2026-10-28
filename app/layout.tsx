import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Farmacia del Norte',
  description: 'Plataforma de gestión de productos, inventario y ventas para Farmacia del Norte.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
