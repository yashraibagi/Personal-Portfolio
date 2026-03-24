import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    color: "from-blue-400 to-neon-cyan",
    glow: "shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 }
    ]
  },
  {
    title: "Data Science",
    color: "from-purple-400 to-neon-purple",
    glow: "shadow-[0_0_15px_-3px_rgba(176,38,255,0.4)]",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "Matplotlib", level: 80 },
      { name: "Scikit-Learn", level: 82 }
    ]
  },
  {
    title: "AI / ML",
    color: "from-pink-400 to-neon-pink",
    glow: "shadow-[0_0_15px_-3px_rgba(255,0,127,0.4)]",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 70 },
      { name: "Regression & Classification", level: 88 },
      { name: "Generative AI", level: 65 }
    ]
  },
  {
    title: "Web Development",
    color: "from-emerald-400 to-teal-400",
    glow: "shadow-[0_0_15px_-3px_rgba(52,211,153,0.4)]",
    skills: [
      { name: "Full Stack Development", level: 80 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Technologies and frameworks I use to bring ideas to life."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-8 rounded-3xl border-t-4 border-t-transparent hover:border-t-current transition-all ${category.glow}`}
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-white">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
