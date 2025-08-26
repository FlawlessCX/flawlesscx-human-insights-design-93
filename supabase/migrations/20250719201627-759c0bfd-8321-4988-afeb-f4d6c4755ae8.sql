-- Create projects table for storing project information
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Project Information
  project_title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  years_active TEXT NOT NULL,
  headline_summary TEXT NOT NULL,
  full_project_summary TEXT NOT NULL,
  business_impact TEXT[], -- Array of impact items
  tags TEXT[], -- Array of tags/sectors/themes
  
  -- Media file paths (stored in Supabase Storage)
  client_logo_url TEXT,
  project_photos TEXT[], -- Array of image URLs
  horizontal_video_url TEXT,
  vertical_video_url TEXT,
  
  -- Optional extras
  client_testimonial TEXT,
  internal_notes TEXT,
  
  -- Status and publication
  is_published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view published projects" 
ON public.projects 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Authenticated users can view all projects" 
ON public.projects 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create projects" 
ON public.projects 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = created_by);

CREATE POLICY "Authenticated users can update their own projects" 
ON public.projects 
FOR UPDATE 
USING (auth.uid() = created_by);

CREATE POLICY "Authenticated users can delete their own projects" 
ON public.projects 
FOR DELETE 
USING (auth.uid() = created_by);

-- Create storage buckets for project media
INSERT INTO storage.buckets (id, name, public) VALUES ('project-logos', 'project-logos', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('project-photos', 'project-photos', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('project-videos', 'project-videos', true);

-- Storage policies for project logos
CREATE POLICY "Anyone can view project logos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-logos');

CREATE POLICY "Authenticated users can upload logos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-logos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Users can update logos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-logos' AND auth.uid() IS NOT NULL);

-- Storage policies for project photos
CREATE POLICY "Anyone can view project photos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-photos');

CREATE POLICY "Authenticated users can upload photos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-photos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Users can update photos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-photos' AND auth.uid() IS NOT NULL);

-- Storage policies for project videos
CREATE POLICY "Anyone can view project videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-videos');

CREATE POLICY "Authenticated users can upload videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-videos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Users can update videos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-videos' AND auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();