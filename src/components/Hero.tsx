
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Design That Solves.
          <br />
          <span className="text-primary">Experiences That Deliver.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          We're FlawlessCX — a London-based Strategic UX & Product Design consultancy that finds 
          the root causes of friction in your customer experience — and fixes them fast.
        </p>
        
        <div className="flex justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 group" asChild>
            <Link to="/start-discovery">
              Let's Fix What's Holding You Back
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
              <iframe 
                src="https://share.synthesia.io/embeds/videos/1ebdb1fc-5915-47b4-8c2e-0fcfaa6e806f?autoplay=0&muted=1&controls=1&cc_load_policy=1"
                loading="lazy" 
                title="FlawlessCX: Strategic UX That Delivers"
                allowFullScreen 
                allow="encrypted-media; fullscreen; autoplay;" 
                style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  top: 0, 
                  left: 0, 
                  border: 'none', 
                  padding: 0, 
                  margin: 0, 
                  overflow: 'hidden' 
                }}
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              A 45-second introduction to our approach, methodology, and the results we deliver for our clients.
            </p>
          </div>
        </div>
      </div>
      
      {/* Abstract visual elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-2xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;
