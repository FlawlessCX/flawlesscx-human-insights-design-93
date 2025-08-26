import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, MessageCircle, Zap, Clock, Target, Play, Volume2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import AIAlexLiveChat from '@/components/AIAlexLiveChat';
import AIAlexVoiceModal from '@/components/AIAlexVoiceModal';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

interface AIAlexContent {
  id: string;
  title: string;
  description?: string;
  video_url: string;
  thumbnail_url?: string;
  duration?: string;
  category?: string;
  created_at: string;
}

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

const AIAlex = () => {
  const [videos, setVideos] = useState<AIAlexContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchVideos();
    
    // Load ElevenLabs ConvAI widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      console.log('ElevenLabs widget script loaded');
    };
    
    script.onerror = () => {
      console.error('Failed to load ElevenLabs widget script');
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_alex_content')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching AI Alex videos:', error);
        return;
      }

      setVideos(data || []);
    } catch (error) {
      console.error('Error fetching AI Alex videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Instant CX Insights",
      description: "Get immediate feedback on your customer experience challenges and opportunities."
    },
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description: "Leverage advanced AI to identify friction points and optimization opportunities."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access expert CX guidance whenever you need it, day or night."
    },
    {
      icon: Target,
      title: "Actionable Recommendations",
      description: "Receive specific, implementable suggestions to improve your customer journey."
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Meet AI Alex
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your AI-powered Customer Experience consultant. Get instant insights, 
            recommendations, and strategic guidance for your CX challenges.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-3 mb-8"
            onClick={() => setShowVoiceModal(true)}
          >
            Chat with AI Alex
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
          
          {/* ElevenLabs ConvAI Widget */}
          <div ref={widgetRef} className="max-w-2xl mx-auto min-h-[400px] flex items-center justify-center">
            <elevenlabs-convai agent-id="agent_01jwgcr30vesv9wdg5eg7jn06y"></elevenlabs-convai>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
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

      {/* AI Alex Videos Section */}
      {videos.length > 0 && (
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Watch AI Alex in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how AI Alex explains complex CX concepts and provides actionable insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {videos.map((video) => (
                <Card 
                  key={video.id} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                  onClick={() => handleVideoClick(video.video_url)}
                >
                  <div className="relative">
                    {video.thumbnail_url ? (
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={video.thumbnail_url} 
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 text-primary ml-1" />
                          </div>
                        </div>
                        {video.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </div>
                        )}
                        {video.category && (
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="text-xs">
                              {video.category}
                            </Badge>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg">
                        <Play className="w-12 h-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {video.title}
                    </CardTitle>
                    {video.description && (
                      <CardDescription>
                        {video.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className={`py-16 px-6 ${videos.length > 0 ? '' : 'bg-muted/30'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How AI Alex Can Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Alex combines years of CX expertise with cutting-edge AI to deliver 
              personalized insights for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Alex Can Do Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Can Alex Help You With?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">CX Strategy & Planning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Customer journey analysis</li>
                <li>• Friction point identification</li>
                <li>• UX improvement recommendations</li>
                <li>• Conversion optimization strategies</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Quick Consultations</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Design decision validation</li>
                <li>• Best practice guidance</li>
                <li>• Industry benchmark insights</li>
                <li>• Implementation roadmaps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start a conversation with AI Alex today and discover how to deliver 
            exceptional customer experiences that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => setShowLiveChat(true)}
            >
              Chat with AI Alex
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* AI Alex Voice Modal */}
      <AIAlexVoiceModal 
        isOpen={showVoiceModal}
        onClose={() => setShowVoiceModal(false)}
        onStartVoiceChat={() => {
          setShowVoiceModal(false);
          setShowLiveChat(true);
        }}
      />

      {/* AI Alex Live Chat Modal */}
      {showLiveChat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button 
              onClick={() => setShowLiveChat(false)}
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
            >
              ✕
            </button>
            <AIAlexLiveChat />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAlex;