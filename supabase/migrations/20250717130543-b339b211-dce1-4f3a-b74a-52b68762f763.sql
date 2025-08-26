
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  phone_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public contact form)
CREATE POLICY "Anyone can submit contact form" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading submissions (you might want to restrict this later)
CREATE POLICY "Anyone can view submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (true);
