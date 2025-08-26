
import { Button } from "@/components/ui/button";
import { Volume2, Video } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

const VideoIntro = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="text-primary">FlawlessCX</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how we find the root causes of customer friction and deliver strategic solutions that drive real business results.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <VideoPlayer 
              videoId="34fbce85-2ce0-49a3-9369-a7bab36545be"
              title="FlawlessCX: Strategic UX That Delivers"
              duration="3 min"
            />
          </div>
          
          {/* Video description */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              A 3-minute introduction to our approach, methodology, and the results we deliver for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
