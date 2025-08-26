import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle } from 'lucide-react';
import AIAlexLiveChat from '@/components/AIAlexLiveChat';

const LinkedInInvite = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    work_email: '',
    business_name: '',
    mobile_number: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          full_name: formData.full_name,
          work_email: formData.work_email,
          business_name: formData.business_name,
          mobile_number: formData.mobile_number || null,
          source: 'linkedin',
          consultation_requested: true,
          lead_status: 'new'
        });

      // Then, send email to Alex
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.full_name,
          email: formData.work_email,
          business_name: formData.business_name,
          phone_number: formData.mobile_number,
          form_type: 'LinkedIn Consultation Request',
          source: 'linkedin'
        }
      });

      if (emailError) {
        console.error('Email error (non-critical):', emailError);
      }

      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "We'll be in touch shortly to book your session!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent flex items-center justify-center p-6">
        <div className="bg-card rounded-xl p-8 shadow-2xl max-w-md w-full border">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Thanks – we'll be in touch shortly to book your session!</h2>
            <p className="text-muted-foreground">
              You'll hear directly from Alex or his team within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header with Logo */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src="/FlawlessCX Logo Long Black No Background.svg" 
              alt="FlawlessCX" 
              className="h-8 dark:hidden"
            />
            <img 
              src="/FlawlessCX Logo Long White No Background.svg" 
              alt="FlawlessCX" 
              className="h-8 hidden dark:block"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Unlock Better CX with Strategic AI Integration
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A 1:1 invite-only session with Alex Bradbury — Founder of FlawlessCX, helping brands integrate AI into their customer journeys.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Book My Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-muted aspect-video rounded-lg flex items-center justify-center mb-12 border">
              <p className="text-muted-foreground text-lg">Alex Bradbury Introduction Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Alex / FlawlessCX */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I work with leadership teams to find and fix what's holding customers back — before they waste time and budget building the wrong thing.
              </p>
              <p>
                Recently, I've been helping brands integrate AI into their CX workflows to increase speed, reduce cost, and deliver clarity across journeys.
              </p>
              <p>
                Clients include John Lewis, Sainsbury's, Ticketmaster, Virgin Media, and Cinch Cars.
              </p>
            </div>
            
            {/* Client Logo Strip */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">Trusted by leading brands</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <img src="/JohnLewis.svg" alt="John Lewis" className="h-8" />
                <img src="/Sainsburys.svg" alt="Sainsbury's" className="h-8" />
                <img src="/Ticketmaster.svg" alt="Ticketmaster" className="h-8" />
                <img src="/VirginMedia.svg" alt="Virgin Media" className="h-8" />
                <img src="/Cinch.svg" alt="Cinch" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">What You'll Get in This Free Session</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">A 1-hour focused consultation with Alex</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Identify friction in your customer or product journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Advice on how and where to apply AI to improve CX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">No obligation. No sales pitch. Just expert thinking.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg border">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "Alex helped us identify blind spots in our customer journey that we never would have found ourselves. His AI integration recommendations saved us months of development time."
                </blockquote>
                <cite className="text-sm text-muted-foreground">— CX Director, Major Retailer</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Alex Live Chat Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience AI Alex</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Try our AI assistant to get instant answers about FlawlessCX services, methodologies, and how we can help your business.
            </p>
            <div className="flex justify-center">
              <AIAlexLiveChat />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="consultation-form" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-2xl border">
              <h2 className="text-3xl font-bold text-foreground text-center mb-2">Contact Form</h2>
              <p className="text-muted-foreground text-center mb-8">
                Request your invite-only consultation
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="full_name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    type="text"
                    id="full_name"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="work_email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    id="work_email"
                    name="work_email"
                    required
                    value={formData.work_email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="business_name" className="text-sm font-medium">
                    Company *
                  </Label>
                  <Input
                    type="text"
                    id="business_name"
                    name="business_name"
                    required
                    value={formData.business_name}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mobile_number" className="text-sm font-medium">
                    Mobile Number
                  </Label>
                  <Input
                    type="tel"
                    id="mobile_number"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleInputChange}
                    placeholder="Optional"
                    className="mt-2"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  {isSubmitting ? 'Submitting...' : 'Request My Free Consultation'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Reassurance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              This page is invite-only and not publicly listed. All submissions are confidential. 
              You'll hear directly from Alex or his team within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInInvite;