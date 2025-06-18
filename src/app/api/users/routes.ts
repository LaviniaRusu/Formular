export async function GET() {
  const res = await fetch("http://localhost:3001/users"); // corect!

  if (!res.ok) {
    return new Response("Eroare la preluare date", { status: 500 });
  }
  const users = await res.json();
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
