-- Create AI Alex content table
CREATE TABLE public.ai_alex_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration TEXT, -- e.g. "2:30"
  category TEXT, -- e.g. "Tutorial", "Demo", "Explanation"
  
  -- Status and publication
  is_published BOOLEAN DEFAULT true,
  created_by UUID REFERENCES auth.users(id),
  
  -- Display order
  display_order INTEGER DEFAULT 0
);

-- Create News & Videos content table
CREATE TABLE public.news_videos_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  article_url TEXT, -- For news articles without videos
  thumbnail_url TEXT,
  duration TEXT, -- e.g. "5:45"
  content_type TEXT NOT NULL DEFAULT 'video', -- 'video' or 'article'
  category TEXT, -- e.g. "Industry News", "Case Study", "Tutorial"
  
  -- Publication date (for news ordering)
  published_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  
  -- Status and publication
  is_published BOOLEAN DEFAULT true,
  created_by UUID REFERENCES auth.users(id),
  
  -- Display order
  display_order INTEGER DEFAULT 0
);

-- Enable RLS on both tables
ALTER TABLE public.ai_alex_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_videos_content ENABLE ROW LEVEL SECURITY;

-- RLS policies for AI Alex content
CREATE POLICY "Anyone can view published AI Alex content" 
ON public.ai_alex_content 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Authenticated users can view all AI Alex content" 
ON public.ai_alex_content 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create AI Alex content" 
ON public.ai_alex_content 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = created_by);

CREATE POLICY "Authenticated users can update their own AI Alex content" 
ON public.ai_alex_content 
FOR UPDATE 
USING (auth.uid() = created_by);

CREATE POLICY "Authenticated users can delete their own AI Alex content" 
ON public.ai_alex_content 
FOR DELETE 
USING (auth.uid() = created_by);

-- RLS policies for News & Videos content
CREATE POLICY "Anyone can view published news & videos content" 
ON public.news_videos_content 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Authenticated users can view all news & videos content" 
ON public.news_videos_content 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create news & videos content" 
ON public.news_videos_content 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = created_by);

CREATE POLICY "Authenticated users can update their own news & videos content" 
ON public.news_videos_content 
FOR UPDATE 
USING (auth.uid() = created_by);

CREATE POLICY "Authenticated users can delete their own news & videos content" 
ON public.news_videos_content 
FOR DELETE 
USING (auth.uid() = created_by);

-- Add triggers for automatic timestamp updates
CREATE TRIGGER update_ai_alex_content_updated_at
BEFORE UPDATE ON public.ai_alex_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_news_videos_content_updated_at
BEFORE UPDATE ON public.news_videos_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_ai_alex_content_published ON public.ai_alex_content(is_published, display_order);
CREATE INDEX idx_news_videos_content_published ON public.news_videos_content(is_published, published_date DESC);
CREATE INDEX idx_news_videos_content_type ON public.news_videos_content(content_type, is_published);