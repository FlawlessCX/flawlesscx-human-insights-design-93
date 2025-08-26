-- Create contact submissions table for form data
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  business_name TEXT,
  mobile_number TEXT,
  company_size TEXT,
  industry TEXT,
  current_challenge TEXT,
  budget_range TEXT,
  timeline TEXT,
  source TEXT DEFAULT 'website',
  consultation_requested BOOLEAN DEFAULT true,
  lead_status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (for form submissions)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create projects table for project content
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  years_active TEXT,
  headline_summary TEXT,
  full_project_summary TEXT,
  business_impact TEXT[],
  tags TEXT[],
  client_logo_url TEXT,
  project_photos TEXT[],
  outcome_metrics JSONB,
  testimonial_quote TEXT,
  testimonial_author TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects
CREATE POLICY "Published projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (is_published = true);

-- Create news and videos table
CREATE TABLE public.news_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  article_url TEXT,
  thumbnail_url TEXT,
  duration TEXT,
  content_type TEXT CHECK (content_type IN ('article', 'video')),
  category TEXT,
  published_date DATE,
  is_published BOOLEAN DEFAULT false,
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for news_videos
ALTER TABLE public.news_videos ENABLE ROW LEVEL SECURITY;

-- Create policies for news_videos
CREATE POLICY "Published content is viewable by everyone" 
ON public.news_videos 
FOR SELECT 
USING (is_published = true);

-- Create ai alex videos table
CREATE TABLE public.ai_alex_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration TEXT,
  category TEXT,
  is_published BOOLEAN DEFAULT false,
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for ai_alex_videos
ALTER TABLE public.ai_alex_videos ENABLE ROW LEVEL SECURITY;

-- Create policies for ai_alex_videos
CREATE POLICY "Published AI Alex videos are viewable by everyone" 
ON public.ai_alex_videos 
FOR SELECT 
USING (is_published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_news_videos_updated_at
  BEFORE UPDATE ON public.news_videos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ai_alex_videos_updated_at
  BEFORE UPDATE ON public.ai_alex_videos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();