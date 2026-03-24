import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const submitMutation = useSubmitContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitMutation.mutateAsync({ data });
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to submit contact form", error);
    }
  };

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
          className="glass-panel p-8 md:p-12 rounded-3xl mt-12"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle2 className="w-20 h-20 text-neon-cyan mb-6" />
              <h3 className="text-3xl font-display font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              <GlowButton 
                variant="outline" 
                className="mt-8"
                onClick={() => setIsSuccess(false)}
              >
                Send Another Message
              </GlowButton>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <input
                    id="name"
                    {...register("name")}
                    className={`w-full bg-background/50 border ${errors.name ? 'border-destructive' : 'border-white/10'} focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full bg-background/50 border ${errors.email ? 'border-destructive' : 'border-white/10'} focus:border-neon-purple focus:ring-1 focus:ring-neon-purple rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full bg-background/50 border ${errors.message ? 'border-destructive' : 'border-white/10'} focus:border-neon-pink focus:ring-1 focus:ring-neon-pink rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground outline-none transition-all resize-none`}
                  placeholder="How can I help you?"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4" /> Available for opportunities
                </div>
                <GlowButton 
                  type="submit" 
                  disabled={isSubmitting || submitMutation.isPending}
                  className="w-full md:w-auto"
                >
                  {isSubmitting || submitMutation.isPending ? "Sending..." : "Send Message"} 
                  <Send className="w-4 h-4 ml-2" />
                </GlowButton>
              </div>
              {submitMutation.isError && (
                <p className="text-destructive text-sm text-center mt-4">Failed to send message. Please try again later.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
