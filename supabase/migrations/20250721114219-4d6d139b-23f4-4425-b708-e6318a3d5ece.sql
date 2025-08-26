
-- Add new columns to contact_submissions table for LinkedIn lead gen
ALTER TABLE public.contact_submissions 
ADD COLUMN source TEXT DEFAULT 'website',
ADD COLUMN mobile_number TEXT,
ADD COLUMN consultation_requested BOOLEAN DEFAULT false,
ADD COLUMN lead_status TEXT DEFAULT 'new',
ADD COLUMN crm_contact_id TEXT;

-- Create index for better performance on source queries
CREATE INDEX idx_contact_submissions_source ON public.contact_submissions(source);
CREATE INDEX idx_contact_submissions_lead_status ON public.contact_submissions(lead_status);
