import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, CheckCircle } from "lucide-react";

const CERTIFICATIONS = [
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn Learning" },
  { name: "GenAI Powered Data Analytics", issuer: "Tata - Forage" },
  { name: "Hashgraph Developer Certification", issuer: "Hedera" },
  { name: "Python Course", issuer: "Lets Upgrade" },
  { name: "HTML & CSS Course", issuer: "Lets Upgrade" },
  { name: "Stock Market Advanced Trading", issuer: "Financial Institute" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Certifications" 
          subtitle="Continuous learning and professional development achievements."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors group"
            >
              <div className="mt-1 p-2 rounded-lg bg-neon-purple/10 text-neon-purple group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 leading-snug">{cert.name}</h4>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-neon-cyan" />
                  {cert.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
