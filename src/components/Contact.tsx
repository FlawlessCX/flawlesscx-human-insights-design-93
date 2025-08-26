
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Uncover Your 
              <br />
              Hidden Opportunities
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to discover what's really stopping your customers from achieving their goals? 
              Let's start with a strategic conversation about your challenges and objectives.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">London-Based</h3>
                  <p className="text-slate-300">Serving clients across the UK and internationally</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Strategic Sessions</h3>
                  <p className="text-slate-300">Free initial consultation to understand your challenges</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-slate-300">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Start the Conversation</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">What's Your Biggest Customer Experience Challenge?</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about the problems you're facing with customer experience..."
                />
              </div>
              
              <Button className="w-full py-4 text-lg">
                Send Message & Schedule Call
              </Button>
            </form>
            
            <p className="text-sm text-slate-600 mt-4 text-center">
              We'll review your message and suggest the best approach for your specific situation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-16 border-t border-slate-700">
          <h3 className="text-3xl font-bold mb-4">FlawlessCX</h3>
          <p className="text-slate-300 mb-6">
            Strategic UX & Product Design Consultancy • London, UK
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-slate-400">
            <span>© 2024 FlawlessCX</span>
            <span>•</span>
            <span>Transforming Customer Experience</span>
            <span>•</span>
            <span>Delivering Business Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
