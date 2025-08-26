import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Search, Wrench, TrendingUp, Volume2, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  duration: string;
}

const VideoPlayer = ({ videoId, title, duration }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hasSound, setHasSound] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlaying) {
            setIsAutoPlaying(true);
            console.log('Video in view, starting autoplay');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  const handlePlaySound = () => {
    setHasSound(true);
    setIsPlaying(true);
    // Force iframe reload with sound enabled
    if (iframeRef.current) {
      iframeRef.current.src = getIframeSrc(true);
    }
  };

  // Initial iframe src with subtitles enabled
  const getIframeSrc = (withSound = false) => {
    const baseUrl = `https://share.synthesia.io/embeds/videos/${videoId}`;
    if (hasSound || withSound) {
      return baseUrl + '?autoplay=1&loop=1&muted=0&controls=1&cc_load_policy=1';
    }
    if (isAutoPlaying) {
      return baseUrl + '?autoplay=1&loop=1&muted=1&controls=0&cc_load_policy=1';
    }
    return baseUrl + '?autoplay=0&muted=1&controls=1&cc_load_policy=1';
  };

  return (
    <div 
      ref={videoRef}
      className="relative aspect-video bg-black"
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
        <iframe 
          ref={iframeRef}
          src={getIframeSrc()}
          loading="lazy" 
          title={title}
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

      {!hasSound && isAutoPlaying && (
        <>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Play Sound button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              onClick={handlePlaySound}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 relative z-10"
              size="lg"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              Play Sound
            </Button>
          </div>
        </>
      )}

      {!isPlaying && !isAutoPlaying && (
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Video className="w-5 h-5" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
};

const StartDiscovery = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    workEmail: '',
    phoneNumber: ''
  });

  const benefits = [
    {
      icon: Target,
      text: "A no-obligation consultation with a CX expert"
    },
    {
      icon: Search,
      text: "Early visibility of where value is leaking in your customer journey"
    },
    {
      icon: Wrench,
      text: "Proven tools and methods used by brands like John Lewis, Virgin Media & Net-a-Porter"
    },
    {
      icon: TrendingUp,
      text: "A faster, clearer way to drive ROI from customer experience improvements"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          full_name: formData.fullName,
          business_name: formData.businessName,
          work_email: formData.workEmail,
          mobile_number: formData.phoneNumber || null,
          source: 'discovery_page'
        });

      if (dbError) {
        throw dbError;
      }

      // Then, send email to Alex
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.fullName,
          email: formData.workEmail,
          business_name: formData.businessName,
          phone_number: formData.phoneNumber,
          form_type: 'Discovery Call Request',
          source: 'discovery_page'
        }
      });

      if (emailError) {
        console.error('Email error (non-critical):', emailError);
      }

      toast.success("Thank you! We'll be in touch soon to schedule your intro call.");
      
      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        workEmail: '',
        phoneNumber: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Clarity. Find Friction. <span className="text-primary">Fix What Matters.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tired of underperforming journeys, clunky experiences, or wasted tech investment?
              FlawlessCX helps businesses like yours quickly identify what's not working in the customer experience—and what to do about it. Whether you're planning new features, optimising a funnel, or tackling churn, we'll give you the insight and direction to get it right the first time.
            </p>
            <p className="text-xl text-muted-foreground mt-6 font-medium">
              Let's talk. No fluff, just facts—and a clear path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What You'll Get From Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See How We Can Help
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Watch this quick overview of our approach and how we've helped businesses like yours improve their customer experience.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer 
                videoId="f16f802c-8705-407a-a312-dca6a10aaf49"
                title="FlawlessCX Discovery Process"
                duration="2 min"
              />
            </div>
            
            {/* Video description */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Learn about our proven process for identifying and fixing customer experience issues.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to improve your customer experience?
              </h2>
              <p className="text-lg text-muted-foreground">
                Leave your details and we'll be in touch to schedule a quick intro call.
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                      Business Name *
                    </label>
                    <Input
                      id="businessName"
                      type="text"
                      required
                      placeholder="Enter your business name"
                      className="w-full"
                      value={formData.businessName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <Input
                      id="workEmail"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                      Phone Number (optional)
                    </label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit & Book Intro Call"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll never spam you. Just a conversation to see if we're a fit.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StartDiscovery;
