import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  MessageSquare, 
  Clock, 
  RefreshCw, 
  Search 
} from "lucide-react";

const SOFTSKILLS = [
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Time Management", icon: Clock },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Attention to Detail", icon: Search },
];

export function SoftSkills() {
  return (
    <section className="py-20 relative border-y border-white/5 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {SOFTSKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-foreground shadow-lg hover:border-neon-cyan/50 hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)] transition-all cursor-default"
            >
              <skill.icon className="w-5 h-5 text-neon-cyan" />
              <span className="font-medium tracking-wide text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
