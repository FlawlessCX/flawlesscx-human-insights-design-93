import { MapPin, Users, Target, Award, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">FlawlessCX</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Strategic UX & Product Design Consultancy delivering exceptional digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  FlawlessCX is a strategic UX and product design consultancy specialising in creating 
                  exceptional digital experiences that drive business growth. We partner with industry 
                  leaders to transform complex challenges into elegant, user-centred solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our expertise spans user research, strategic design, and product development, 
                  helping organisations deliver experiences that truly resonate with their customers 
                  and achieve measurable business outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Strategic Focus</h3>
                  <p className="text-sm text-muted-foreground">User-centred design strategies</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Measurable business impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12">
              Our diverse team of UX strategists, researchers, and designers brings together 
              decades of experience from leading technology companies and design agencies. 
              We're passionate about creating meaningful digital experiences that make a difference.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Alex Bradbury 02 2025.JPG" 
                    alt="Alex Bradbury" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Alex Bradbury</h3>
                <p className="text-sm text-primary font-medium mb-2">Founder & Director</p>
                <p className="text-sm text-muted-foreground">Strategic UX leadership with enterprise experience</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Sean-Quinlivin.jpg" 
                    alt="Sean Quinlivan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Sean Quinlivan</h3>
                <p className="text-sm text-primary font-medium mb-2">Associate / UX & Service Designer</p>
                <p className="text-sm text-muted-foreground">Specialist in user-centered design and service innovation</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Mark-Johnston.jpg" 
                    alt="Mark Johnston" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Mark Johnston</h3>
                <p className="text-sm text-primary font-medium mb-2">Associate / Business Consultant</p>
                <p className="text-sm text-muted-foreground">Business strategy and digital transformation expert</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Alain-Kowalczyk.jpg" 
                    alt="Alain Kowalczyk" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Alain Kowalczyk</h3>
                <p className="text-sm text-primary font-medium mb-2">Associate / Product Management Consultant</p>
                <p className="text-sm text-muted-foreground">Product strategy and agile development specialist</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Nadine Drelaud.jpeg" 
                    alt="Nadine Drelaud" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Nadine Drelaud</h3>
                <p className="text-sm text-primary font-medium mb-2">Associate / Product Delivery Consultant</p>
                <p className="text-sm text-muted-foreground">Expert in product delivery and operational excellence</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Sarah Bradbury.png" 
                    alt="Sarah Bradbury" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">Sarah Bradbury</h3>
                <p className="text-sm text-primary font-medium mb-2">Associate / Marketing & Business Consultant</p>
                <p className="text-sm text-muted-foreground">Marketing strategy and business growth specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">Our Location</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  We're based at the prestigious IBM Hursley grounds in Hampshire, UK - 
                  a hub of innovation and technology excellence. This historic location 
                  provides us with access to cutting-edge facilities and a collaborative 
                  environment that inspires our best work.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The IBM Hursley campus has been at the forefront of technological 
                  advancement for decades, making it the perfect environment for our 
                  strategic design consultancy to thrive and deliver world-class solutions.
                </p>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">IBM Hursley</h3>
                  <p className="text-muted-foreground mb-2">Hursley Park, Winchester</p>
                  <p className="text-muted-foreground">Hampshire, SO21 2JN, United Kingdom</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Located in the heart of Hampshire's technology corridor, 
                    our office provides easy access for clients across the UK and Europe.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>🚗 Easy motorway access via M3</p>
                    <p>✈️ Southampton Airport nearby</p>
                    <p>🚊 Winchester station 10 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Solve Your <span className="text-primary">UX Challenges</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to discover what's stopping your customers? Let's start a conversation about 
              how we can transform your user experience and drive your business forward.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Left Side - Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@flawlesscx.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+44 20 7946 0958</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">London, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">Connect with Alex</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4">Why Work With Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Strategic approach to UX challenges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Proven track record of business results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Efficient, pragmatic implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">London-based with global expertise</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Start The Conversation</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="john@company.com"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    type="text" 
                    placeholder="Your Company"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="challenge">Tell Us About Your Challenge *</Label>
                  <Textarea 
                    id="challenge"
                    rows={6}
                    placeholder="Describe the UX challenges you're facing and what you'd like to achieve..."
                    className="resize-none"
                  />
                </div>
                
                <Button className="w-full h-12 text-base">
                  Send Message
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;