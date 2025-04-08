"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/components/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "R$0",
    description: "Explore o Henry Security gratuitamente",
    features: [
      "1 projeto monitorado",
      "Alertas básicos",
      "Painel limitado",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$49/mês",
    description: "Ideal para desenvolvedores e startups",
    features: [
      "10 projetos",
      "Alertas em tempo real",
      "Dashboard completo",
      "Suporte dedicado",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Soluções para grandes empresas e equipes",
    features: [
      "Monitoramento ilimitado",
      "Integrações personalizadas",
      "Suporte 24/7",
      "SLA empresarial",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Planos acessíveis e escaláveis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Comece gratuito e escale conforme sua aplicação cresce.
        </motion.p>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-xl p-8 border backdrop-blur-md transition-transform duration-300",
                plan.highlight
                  ? "bg-gradient-to-br from-green-400/10 to-blue-500/10 border-green-400/30 shadow-2xl scale-[1.02]"
                  : "bg-white/5 border-gray-800"
              )}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-green-400 mb-1">
                {plan.price}
              </p>
              <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

              <ul className="space-y-3 text-left text-sm text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-400 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "mt-8 w-full py-2 px-4 rounded-md font-medium transition-all",
                  plan.highlight
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "border border-gray-600 hover:border-gray-400 text-gray-200"
                )}
              >
                {plan.highlight ? "Assinar Pro" : "Saiba mais"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
