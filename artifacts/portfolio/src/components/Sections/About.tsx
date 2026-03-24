import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, GraduationCap, Gamepad2, Compass, Activity, Brain } from "lucide-react";

export function About() {
  const hobbies = [
    { icon: Compass, name: "Exploring Tech" },
    { icon: Activity, name: "Cricket" },
    { icon: Gamepad2, name: "Volleyball" },
    { icon: Brain, name: "Dancing" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="A passionate engineering student bridging the gap between design and complex algorithms."
        />

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass-panel p-8 md:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-white">
              <GraduationCap className="text-neon-cyan w-8 h-8" />
              Education & Background
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I am a 21-year-old 3rd-year engineering student pursuing <strong className="text-neon-purple">Computer Science and Design Engineering</strong> at Tontadarya College of Engineering. 
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              My academic journey has been driven by a fascination with both the logical precision of AI/ML and the aesthetic empathy of design. I maintain a solid academic record with a <strong className="text-neon-cyan">CGPA of 7.3</strong>, while continuously expanding my skill set outside the classroom.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <MapPin className="text-neon-pink w-5 h-5" />
                <span className="font-medium">Tontadarya College</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <GraduationCap className="text-neon-cyan w-5 h-5" />
                <span className="font-medium">BE 3rd Year</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-xl font-display font-bold mb-6 text-white text-center">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-purple/50 transition-all group"
                  >
                    <hobby.icon className="w-8 h-8 mb-3 text-muted-foreground group-hover:text-neon-purple transition-colors" />
                    <span className="text-sm font-medium text-center">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
