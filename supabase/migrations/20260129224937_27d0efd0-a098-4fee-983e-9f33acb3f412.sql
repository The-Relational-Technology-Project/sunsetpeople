-- Add explicit SELECT deny policy to contact_submissions table
-- This ensures contact form submissions (containing PII) cannot be read by anyone via the API
CREATE POLICY "No public read access to contact submissions"
ON public.contact_submissions
FOR SELECT
USING (false);