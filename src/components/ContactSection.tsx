import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useMathCaptcha } from "@/hooks/use-math-captcha";
import { useLanguage } from "@/i18n/LanguageContext";
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
import { Loader2, Mail, RefreshCw } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
  captcha: z.string().trim().min(1, "Please solve the math problem"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { question, validate, refresh } = useMathCaptcha();
  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      captcha: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!validate(values.captcha)) {
      form.setError("captcha", { message: "Incorrect answer, please try again" });
      refresh();
      form.setValue("captcha", "");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: values.name,
        email: values.email,
        message: values.message,
      });

      if (error) throw error;

      await supabase.functions.invoke("send-notification", {
        body: {
          type: "contact",
          name: values.name,
          email: values.email,
          message: values.message,
        },
      });

      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDesc"),
      });
      
      form.reset();
      refresh();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-secondary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            {t("contact.subtitle1")}
            <br />
            {t("contact.subtitle2")}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.nameLabel")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.namePlaceholder")} {...field} />
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
                    <FormLabel>{t("contact.emailLabel")}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t("contact.emailPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.messageLabel")}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t("contact.messagePlaceholder")}
                        className="min-h-[120px] resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="captcha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <span>{t("contact.captchaLabel")} {question}?</span>
                      <button
                        type="button"
                        onClick={() => {
                          refresh();
                          form.setValue("captcha", "");
                        }}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Get a new math problem"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        inputMode="numeric"
                        placeholder={t("contact.namePlaceholder") === "张三" ? "你的答案" : "Your answer"}
                        autoComplete="off"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                variant="secondary"
                className="w-full font-display font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("contact.submitting")}
                  </>
                ) : (
                  t("contact.submitButton")
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
