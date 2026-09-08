// Importa el componente personalizado SkillCard para mostrar las habilidades.
import SkillCard from '@/components/SkillCard';

// Array de habilidades. Cada objeto coincide con la interface SkillCardProps:
//   name  -> nombre de la habilidad
//   level -> nivel (Beginner / Intermediate / Advanced / Learning)
const skills = [
  { name: 'TypeScript', level: 'Beginner' },
  { name: 'React', level: 'Beginner' },
  { name: 'Next.js', level: 'Learning' },
  { name: 'Node.js', level: 'Beginner' },
  { name: 'PostgreSQL', level: 'Beginner' },
  { name: 'Tailwind CSS', level: 'Beginner' }
];

// About es la página "Sobre mí". Es un Server Component.
// Vive en app/about/page.tsx, por eso Next.js la expone en la ruta "/about"
// (file-based routing: la carpeta define la URL).
export default function About() {
  return (
    // Contenido principal centrado con ancho máximo (max-w-4xl).
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Título de la página */}
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      {/* Texto introductorio */}
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work.
      </p>

      {/* Subtítulo de la sección de habilidades */}
      <h3 className="text-2xl font-bold mb-4">Skills</h3>

      {/* Grilla de SkillCards: 1 columna en celular, 3 en pantallas medianas+ */}
      <section className="grid gap-4 md:grid-cols-3">
        {/* .map() recorre el array "skills" y dibuja un SkillCard por cada habilidad */}
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </section>
    </main>
  );
}
