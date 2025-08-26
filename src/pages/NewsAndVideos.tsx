import React, { useEffect, useState } from 'react';
import { Play, Calendar, Clock, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';

interface NewsVideosContent {
  id: string;
  title: string;
  description?: string;
  video_url?: string;
  article_url?: string;
  thumbnail_url?: string;
  duration?: string;
  content_type: 'video' | 'article';
  category?: string;
  published_date: string;
  created_at: string;
}

const NewsAndVideos = () => {
  const [content, setContent] = useState<NewsVideosContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('news_videos_content')
        .select('*')
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (error) {
        console.error('Error fetching news & videos content:', error);
        return;
      }

      setContent((data || []) as NewsVideosContent[]);
    } catch (error) {
      console.error('Error fetching news & videos content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const handleContentClick = (item: NewsVideosContent) => {
    const url = item.content_type === 'video' ? item.video_url : item.article_url;
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Fallback data if no database content is available
  const fallbackData = [
    {
      id: 'fallback-1',
      title: "Welcome to FlawlessCX",
      description: "An introduction to FlawlessCX and our approach to delivering exceptional customer experiences.",
      thumbnail_url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop",
      duration: "3:24",
      published_date: "2024-01-20",
      category: "Introduction",
      content_type: "video" as const,
      video_url: "https://share.synthesia.io/746e1142-d9d0-4826-8462-23f890fd2622",
      created_at: "2024-01-20"
    },
    {
      id: 'fallback-2',
      title: "The Future of UX Design: Trends and Predictions for 2024",
      description: "Alex discusses the emerging trends in user experience design and what businesses should prepare for in the coming year.",
      thumbnail_url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop",
      duration: "12:45",
      published_date: "2024-01-15",
      category: "UX Trends",
      content_type: "video" as const,
      created_at: "2024-01-15"
    }
  ];

  const displayContent = content.length > 0 ? content : fallbackData;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & <span className="text-primary">Videos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, case studies, and expert perspectives on UX design and digital transformation 
              from Alex Bradbury and the FlawlessCX team.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Loading content...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {displayContent.map((item) => (
                <div key={item.id} className="group cursor-pointer" onClick={() => handleContentClick(item)}>
                  <div className="relative bg-card rounded-lg overflow-hidden border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    {/* Content Thumbnail */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      {item.thumbnail_url ? (
                        <img 
                          src={item.thumbnail_url} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          {item.content_type === 'video' ? (
                            <Play className="w-12 h-12 text-muted-foreground" />
                          ) : (
                            <ExternalLink className="w-12 h-12 text-muted-foreground" />
                          )}
                        </div>
                      )}
                      
                      {/* Play Button or External Link Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          {item.content_type === 'video' ? (
                            <Play className="w-6 h-6 text-primary ml-1" />
                          ) : (
                            <ExternalLink className="w-6 h-6 text-primary" />
                          )}
                        </div>
                      </div>
                      
                      {/* Duration Badge (for videos) */}
                      {item.content_type === 'video' && item.duration && (
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      {item.category && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                      )}

                      {/* Content Type Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge variant={item.content_type === 'video' ? 'default' : 'outline'} className="text-xs">
                          {item.content_type === 'video' ? 'Video' : 'Article'}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {item.description}
                        </p>
                      )}
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(item.published_date)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No content message */}
          {!isLoading && content.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No content has been published yet.</p>
              <p className="text-sm text-muted-foreground">Check back soon for new videos and articles!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get notified when Alex publishes new insights and case studies. 
              Join our community of UX professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <Button className="px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndVideos;