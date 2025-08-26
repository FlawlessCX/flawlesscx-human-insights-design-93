import { Button } from "@/components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";

const DiscoveryStackHighlight = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Flagship Diagnostics Product
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">DiscoveryStack®</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Clarity, Strategy, Confidence — Before You Build.
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Every client engagement starts with our proprietary <strong>DiscoveryStack®</strong> — 
              a powerful diagnostics framework that blends human insight with AI-powered analysis to reveal:
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex-1 max-w-xs text-center">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                <p className="text-lg font-medium">What's broken in the customer experience</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
              <div className="w-6 h-6 text-primary md:hidden rotate-90">
                <ArrowRight className="w-6 h-6" />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex-1 max-w-xs text-center">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                <p className="text-lg font-medium">Why it's happening</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
              <div className="w-6 h-6 text-primary md:hidden rotate-90">
                <ArrowRight className="w-6 h-6" />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex-1 max-w-xs text-center">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                <p className="text-lg font-medium">What to do next</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              So you don't waste time solving the wrong problem.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Stop solving the wrong problems
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Most businesses jump too quickly into design and build—without truly understanding the root causes of friction or what their customers actually need.
                  </p>
                  <p>
                    DiscoveryStack® is a fast, focused diagnostic that identifies exactly where friction exists in your customer experience and what to do about it.
                  </p>
                  <p className="font-medium text-foreground">
                    Get the insight to design with precision and deliver with confidence.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-6">You'll discover:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>What's broken in the customer experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Why it's happening</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>What to do next</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="w-full group" asChild>
                    <Link to="/discovery-stack">
                      Learn about DiscoveryStack®
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryStackHighlight;