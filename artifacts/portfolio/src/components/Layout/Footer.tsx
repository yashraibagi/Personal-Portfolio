import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-neon-purple/20 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-2xl tracking-wider text-gradient">
            YASH
          </span>
          <p className="text-muted-foreground mt-2 text-sm text-center md:text-left">
            3rd Year CS & Design Engineering Student <br/> @ Tontadarya College of Engineering
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center text-sm text-muted-foreground/60">
        © {new Date().getFullYear()} Yash Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
