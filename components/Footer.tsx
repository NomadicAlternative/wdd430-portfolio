// Footer es un Server Component que muestra la parte inferior de cada página.
export default function Footer() {
  return (
    // <footer> es el elemento HTML semántico para la parte inferior de la página.
    // Clases de Tailwind:
    //   bg-gray-800 -> fondo gris oscuro
    //   text-white  -> texto blanco
    //   py-4        -> padding vertical
    //   mt-12       -> margen superior (espacio entre el contenido y el footer)
    //   text-center -> centra el texto horizontalmente
    <footer className="bg-gray-800 text-white py-4 mt-12 text-center">
      <p>
        {/* new Date().getFullYear() devuelve el año actual en tiempo de ejecución,
            así el año del copyright siempre se mantiene actualizado automáticamente. */}
        Copyright &copy; {new Date().getFullYear()} | Diego Garcia | All rights reserved
      </p>
    </footer>
  );
}
