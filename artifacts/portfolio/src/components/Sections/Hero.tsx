import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/cyber-bg.png`} 
          alt="Cyber Background" 
          className="w-full h-full object-cover opacity-30 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-neon-cyan/30 text-neon-cyan text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Available for Internships
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-gradient">Yash</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl font-light text-muted-foreground mb-8 h-12 flex items-center">
            <TypeAnimation
              sequence={[
                'AI/ML Enthusiast',
                2000,
                'Full Stack Developer',
                2000,
                'Data Analyst',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white font-medium"
            />
          </div>
          
          <p className="text-lg text-muted-foreground/80 max-w-xl mb-10 leading-relaxed">
            Crafting intelligent models and beautiful interfaces. 3rd year Computer Science and Design Engineering student exploring the boundaries of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#projects">
              <GlowButton className="w-full sm:w-auto">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </GlowButton>
            </a>
            <a href="#contact">
              <GlowButton variant="outline" className="w-full sm:w-auto">
                Contact Me
              </GlowButton>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center"
        >
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative w-80 h-80 rounded-full p-2 bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink shadow-[0_0_50px_-10px_rgba(0,240,255,0.5)]">
            <div className="w-full h-full rounded-full bg-background overflow-hidden border-4 border-background flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile-pic.png`}
                alt="Yash Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating badges removed */}
        </motion.div>
        
      </div>
    </section>
  );
}
