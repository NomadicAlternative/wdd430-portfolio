// Importa el componente Link de Next.js.
// Permite navegar entre páginas SIN recargar la página completa.
import Link from 'next/link';

// Header es un Server Component: se ejecuta en el servidor y devuelve HTML listo.
// No lleva 'use client' porque no tiene interactividad.
export default function Header() {
  return (
    // <header> es el elemento HTML semántico para la parte superior de la página.
    // Clases de Tailwind:
    //   bg-blue-600 -> fondo azul
    //   text-white  -> texto blanco
    //   py-4        -> padding vertical (arriba y abajo)
    //   shadow-md   -> sombra suave debajo de la barra
    <header className="bg-blue-600 text-white py-4 shadow-md">
      {/* Bloque de título con el nombre del dueño del sitio */}
      <div className="text-2xl font-bold">Diego Garcia</div>

      {/* <nav> marca la zona de navegación de la página */}
      <nav>
        {/* Lista en horizontal (flex) con espacio entre elementos (gap-6) */}
        <ul className="flex gap-6">
          {/* Enlace a la página de inicio. href="/" corresponde a app/page.tsx */}
          <li><Link href="/">Home</Link></li>
          {/* Enlace a la página about. href="/about" corresponde a app/about/page.tsx */}
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
