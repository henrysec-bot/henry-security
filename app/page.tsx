import Hero from "../components/Hero";
import Planos from "../components/Planos";
import Recursos from "../components/Recursos";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-neon min-h-screen">
      <Hero />
      <Recursos />
      <Planos />
      <Login />
      <Footer />
    </main>
  );
}