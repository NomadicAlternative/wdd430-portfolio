// Ruta API de Next.js (capa "backend" del proyecto).
// Vive en app/api/hello/route.ts, por eso responde en la URL "/api/hello".
// Nota: aquí el archivo se llama route.ts (NO page.tsx), porque es una API,
// no una página con interfaz visual.

// "GET" es el nombre especial que define qué pasa cuando llega una
// petición HTTP GET a esta ruta (cuando alguien abre /api/hello en el navegador).
// La función es async porque en el futuro hará trabajo asíncrono (leer una base de datos, etc.).
export async function GET() {
  // Response.json() devuelve una respuesta JSON al cliente.
  // Es lo que ves en el navegador al visitar http://localhost:3000/api/hello
  return Response.json({ message: 'Hello from Next.js API!' });
}
