// Una interface es la forma de TypeScript de describir la "forma" de un objeto.
// Aquí declara qué props espera recibir este componente:
//   title        -> string (obligatorio)
//   description  -> string (obligatorio)
//   technologies -> string[] (obligatorio: un array de strings)
//   link         -> string (OPCIONAL: el ? significa que puede no venir)
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

// ProjectCard es un Server Component que muestra UN proyecto como una tarjeta.
// El destructuring ({ title, description, ... }) extrae cada prop del objeto
// de props para poder usarlas directamente en el JSX de abajo.
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    // <article> es el elemento HTML semántico para un contenido independiente.
    // Clases de Tailwind:
    //   border-l-4 border-blue-600 -> borde de acento azul grueso a la izquierda
    //   bg-gray-50 -> fondo gris muy claro
    //   rounded    -> esquinas redondeadas
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
      {/* Título del proyecto */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* Descripción del proyecto */}
      <p className="text-gray-700 mb-3">{description}</p>

      {/* Tecnologías: join(', ') convierte el array ['A','B'] en el texto "A, B" */}
      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>

      {/* Renderizado condicional: el enlace se muestra SOLO si se pasó la prop link */}
      {link && (
        <p className="mt-2">
          {/* URL externa -> se usa <a> (no <Link>).
              target="_blank" abre el enlace en una pestaña nueva;
              rel="noopener noreferrer" es una buena práctica de seguridad. */}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
        </p>
      )}
    </article>
  );
}
