import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to discuss AI & Design? Let's talk."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl mt-12 text-center"
        >
          <h3 className="text-2xl font-display font-medium text-white mb-4">
            Reach Out Directly
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I've disabled the contact form for now, but I'm always open to new opportunities! 
            The best way to reach me is directly via email or WhatsApp using the links in the footer below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
