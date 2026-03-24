import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, ExternalLink, Activity, ShieldAlert, CreditCard } from "lucide-react";

const PROJECTS = [
  {
    title: "Customer Churn Prediction",
    description: "An advanced Machine Learning model designed to predict customer retention probability, allowing businesses to take proactive measures.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    icon: Activity,
    color: "neon-cyan"
  },
  {
    title: "Spam Email Detection",
    description: "A robust classification model utilizing Natural Language Processing to accurately filter and detect spam emails with high precision.",
    tech: ["Python", "NLP", "Scikit-Learn"],
    icon: ShieldAlert,
    color: "neon-purple"
  },
  {
    title: "CC Analytics Dashboard",
    description: "Credit Card Customer & Transaction Analytics Dashboard providing visual insights into spending patterns and user behavior.",
    tech: ["Python", "Matplotlib", "Pandas"],
    icon: CreditCard,
    color: "neon-pink"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world applications of data science and machine learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                scale={1.02} 
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="glass-panel h-full rounded-3xl p-8 flex flex-col group hover:border-white/20 transition-colors">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${project.color}/10 text-${project.color} shadow-[0_0_15px_-3px_var(--color-${project.color})]`}>
                    <project.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    <a href="#" className="flex items-center gap-2 text-sm font-semibold hover:text-neon-cyan transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-semibold hover:text-neon-purple transition-colors">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
