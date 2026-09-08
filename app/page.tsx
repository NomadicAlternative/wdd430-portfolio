// Importa el contenedor de proyectos (ProjectList) que dibuja todas las tarjetas.
import ProjectList from '@/components/ProjectList';

// Array con los datos REALES de tus proyectos.
// Se define FUERA del componente porque es un dato estático (no cambia entre renders).
// Cada objeto cumple con la interface "Project" definida en ProjectList.tsx:
//   title, description, technologies (array de strings) y link (opcional).
const projects = [
  {
    title: 'Leadership Planning System',
    description: 'A shared leadership planning system based on the Franklin Covey methodology, built for the Elda Branch.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    link: 'https://github.com/NomadicAlternative/leadership-planning-system'
  },
  {
    title: 'ioTech',
    description: 'A multi-tenant IoT SaaS platform connecting ESP32 devices to a real-time web dashboard.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MQTT'],
    link: 'https://github.com/NomadicAlternative/ioTech'
  }
];

// Home es la página principal. Es un Server Component.
// Next.js la enlaza automáticamente a la ruta "/" porque vive en app/page.tsx.
export default function Home() {
  return (
    // <main> es el contenido principal de la página.
    //   container mx-auto -> centra el contenido con un ancho máximo
    //   px-4 -> padding horizontal
    //   py-12 -> padding vertical
    <main className="container mx-auto px-4 py-12">
      {/* Encabezado de la página (título + intro) */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>

      {/* Aquí se pasa el array "projects" como prop a ProjectList.
          ProjectList se encarga de recorrerlo y dibujar un ProjectCard por cada uno. */}
      <ProjectList projects={projects} />
    </main>
  );
}
