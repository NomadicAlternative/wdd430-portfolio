// Interface que describe las props que recibe SkillCard.
// Este componente es tu "componente personalizado" del assignment:
//   name  -> string (el nombre de la habilidad, ej: "TypeScript")
//   level -> string (el nivel o descripción, ej: "Intermedio")
interface SkillCardProps {
  name: string;
  level: string;
}

// SkillCard es un Server Component que muestra UNA habilidad técnica como tarjeta.
// El destructuring ({ name, level }) extrae cada prop para usarla en el JSX.
export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    // Tarjeta simple estilizada con Tailwind:
    //   p-4              -> padding interno
    //   bg-gray-50       -> fondo gris muy claro
    //   rounded          -> esquinas redondeadas
    //   border border-gray-200 -> borde fino gris
    <div className="p-4 bg-gray-50 rounded border border-gray-200">
      {/* Nombre de la habilidad */}
      <h3 className="font-bold">{name}</h3>
      {/* Nivel o descripción de la habilidad */}
      <p className="text-gray-600">{level}</p>
    </div>
  );
}
