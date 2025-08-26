import { Check, Zap, Brain, Briefcase, MapPin, Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SubscriptionServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-lg px-4 py-2">
                FlawlessCX On-Demand
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Subscription Consultancy from <span className="text-primary">Alex Bradbury</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Strategic Design Support. On Tap. When You Need It.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <p className="text-lg">
                For <span className="font-bold text-primary">£5,000 per month</span>, you gain direct, flexible access to Alex Bradbury, 
                founder of FlawlessCX and one of the UK's most experienced UX and Service Design consultants — 
                without the overhead of project scoping or day-rate contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your Subscription Design Partner
            </h2>
            <p className="text-xl text-muted-foreground">
              Alex Bradbury introduces FlawlessCX On-Demand and how it can transform your product development process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/34fbce85-2ce0-49a3-9369-a7bab36545be?autoplay=0&muted=1&controls=1&cc_load_policy=1"
                  loading="lazy" 
                  title="FlawlessCX Subscription Services Introduction"
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
                Learn how FlawlessCX On-Demand provides strategic design support exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Check className="h-8 w-8 text-green-500" />
              <h2 className="text-3xl md:text-4xl font-bold">What You Get</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3 text-lg">Ongoing UX & Service Design Support</h3>
                <p className="text-muted-foreground">
                  Design reviews, idea shaping, concept creation, journey mapping.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3 text-lg">Strategic Consultancy and Coaching</h3>
                <p className="text-muted-foreground">
                  Inject 20+ years of experience directly into your team to unblock delivery, shape roadmaps, or validate product direction.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3 text-lg">Ad Hoc Problem-Solving</h3>
                <p className="text-muted-foreground">
                  Drop Alex into workshops, research sessions, or tricky product decisions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3 text-lg">Remote-First Availability</h3>
                <p className="text-muted-foreground">
                  Always available online, and in-person sessions in London or elsewhere can be arranged.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-primary">No hiring. No overhead. Just answers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Why This Works</h2>
            </div>
            
            <div className="bg-card p-8 rounded-lg border mb-8">
              <p className="text-lg mb-6">
                Over the past decade, Alex has helped shape digital and service experiences for 
                John Lewis, Net-A-Porter, Virgin Media, Ticketmaster, Cinch Cars, and more.
              </p>
              
              <p className="text-lg mb-6">
                With this subscription, you're not just paying for hours — you're unlocking:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>A sounding board for your team.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>A partner for your product leads.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>A shortcut to clarity on design, delivery, and CX decisions.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>An experienced voice to help avoid costly mistakes.</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-center font-medium">
              Whether you're a product team with an urgent problem or a business leader seeking expert validation — 
              this is senior strategic input without the friction.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Ideal For</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Growing Product Teams</h3>
                <p className="text-muted-foreground">
                  Teams lacking senior UX/CX guidance who need strategic direction.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Businesses Between Hires</h3>
                <p className="text-muted-foreground">
                  Organizations needing expertise while recruiting permanent team members.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Founders & Leaders</h3>
                <p className="text-muted-foreground">
                  Who want a trusted design advisor on call for strategic decisions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Delivery Squads</h3>
                <p className="text-muted-foreground">
                  Teams looking for quick feedback or unblockers to maintain momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Fixed Monthly Fee</h3>
                    <p className="text-muted-foreground">£5,000 per month for ongoing access</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Flexible Support</h3>
                    <p className="text-muted-foreground">Across UX, Service Design, Product, Research, and Strategy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Usage Capped</h3>
                    <p className="text-muted-foreground">Details agreed on engagement, but you can call on Alex as needed — Slack, Zoom, or Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to tap into 20 years of experience without the day rate dance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's talk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="mailto:alex@flawlesscx.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  alex@flawlesscx.com
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/" className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5" />
                  flawlesscx.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionServices;