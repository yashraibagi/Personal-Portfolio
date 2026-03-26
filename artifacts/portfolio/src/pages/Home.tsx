import { useEffect, useState } from "react";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Hero } from "@/components/Sections/Hero";
import { About } from "@/components/Sections/About";
import { Skills } from "@/components/Sections/Skills";
import { Projects } from "@/components/Sections/Projects";
import { Certifications } from "@/components/Sections/Certifications";
import { SoftSkills } from "@/components/Sections/SoftSkills";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate initial app loading for cinematic effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-background flex flex-col items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-background shadow-[0_0_30px_rgba(0,240,255,0.5)] mb-8"
        >
          <Terminal className="w-8 h-8" />
        </motion.div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-neon-cyan"
          />
        </div>
        <p className="mt-4 font-mono text-neon-cyan text-sm animate-pulse">INITIALIZING SYSTEM...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="bg-background min-h-screen text-foreground selection:bg-neon-cyan/30 selection:text-white"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </motion.div>
  );
}
