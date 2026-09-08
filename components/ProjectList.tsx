// Importa el componente ProjectCard que acabamos de crear.
// Se usa la ruta './ProjectCard' porque está en la misma carpeta (components/).
import ProjectCard from './ProjectCard';

// Interface que describe la forma de UN proyecto.
// Es el "contrato" que deben cumplir los datos de cada proyecto:
//   title        -> string (obligatorio)
//   description  -> string (obligatorio)
//   technologies -> string[] (array de strings, obligatorio)
//   link         -> string (opcional, por eso el ?)
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

// Interface que describe las props que recibe ProjectList.
// Recibe una sola prop: un array de proyectos.
interface ProjectListProps {
  projects: Project[];
}

// ProjectList es un Server Component "contenedor": no dibuja las tarjetas él mismo,
// sino que recorre la lista y le pide a ProjectCard que dibuje cada una.
export default function ProjectList({ projects }: ProjectListProps) {
  return (
    // <section> agrupa el listado de tarjetas.
    // Clases de Tailwind:
    //   grid gap-4      -> grilla con espacio entre tarjetas
    //   md:grid-cols-2  -> en pantallas medianas o más grandes, 2 columnas
    //                      (en celular queda 1 columna, es responsive)
    <section className="grid gap-4 md:grid-cols-2">
      {/* .map() recorre el array "projects" y, por cada proyecto,
          devuelve un <ProjectCard>. Es como aplicar la misma receta a cada elemento. */}
      {projects.map((project) => (
        // key={project.title} -> identificador único que React necesita para
        // saber qué tarjeta es cuál al actualizar la lista.
        // {...project} -> "spread operator": desparrama todas las propiedades
        // del proyecto como props de ProjectCard (title, description, technologies, link).
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
