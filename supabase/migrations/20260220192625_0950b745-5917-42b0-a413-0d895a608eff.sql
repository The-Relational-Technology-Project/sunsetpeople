CREATE POLICY "No public read access to group suggestions"
ON public.group_suggestions
FOR SELECT
USING (false);