export default function Planos() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-neon">Nossos Planos</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-neon">Básico</div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-neon">Pro</div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-neon">Enterprise</div>
      </div>
    </section>
  );
}