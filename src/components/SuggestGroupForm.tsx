import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Plus } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  group_name: z.string().trim().min(1, "Group name is required").max(200, "Group name must be less than 200 characters"),
  group_link: z.string().trim().url("Must be a valid URL").max(500, "Link must be less than 500 characters").optional().or(z.literal("")),
  note: z.string().trim().max(1000, "Note must be less than 1000 characters").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function SuggestGroupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      group_name: "",
      group_link: "",
      note: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("group_suggestions").insert({
        name: values.name,
        email: values.email,
        group_name: values.group_name,
        group_link: values.group_link || null,
        note: values.note || null,
      });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke("send-notification", {
        body: {
          type: "group_suggestion",
          name: values.name,
          email: values.email,
          group_name: values.group_name,
          group_link: values.group_link || undefined,
          note: values.note || undefined,
        },
      });

      toast({
        title: "Thank you!",
        description: "We'll review your suggestion and may add it to the list.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting group suggestion:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-sand-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-7 h-7 text-accent" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            know a group we should add?
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            This list is better when more people help shape it.
            <br />
            If you know a group, club, or recurring gathering in the Sunset, we would love to include it.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="group_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sunset Morning Run Club" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="group_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short note (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us a bit about this group — when they meet, what it's like to show up for the first time..."
                        className="min-h-[100px] resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full font-display font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send suggestion"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
