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
import { Loader2, Plus, RefreshCw } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  group_name: z.string().trim().min(1, "Group name is required").max(200, "Group name must be less than 200 characters"),
  group_link: z.string().trim().url("Must be a valid URL").max(500, "Link must be less than 500 characters").optional().or(z.literal("")),
  note: z.string().trim().max(1000, "Note must be less than 1000 characters").optional(),
  captcha: z.string().trim().min(1, "Please solve the math problem"),
});

type FormValues = z.infer<typeof formSchema>;

export function SuggestGroupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { question, validate, refresh } = useMathCaptcha();
  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      group_name: "",
      group_link: "",
      note: "",
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
      const { error } = await supabase.from("group_suggestions").insert({
        name: values.name,
        email: values.email,
        group_name: values.group_name,
        group_link: values.group_link || null,
        note: values.note || null,
      });

      if (error) throw error;

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
        title: t("suggest.successTitle"),
        description: t("suggest.successDesc"),
      });
      
      form.reset();
      refresh();
    } catch (error) {
      console.error("Error submitting group suggestion:", error);
      toast({
        title: t("suggest.errorTitle"),
        description: t("suggest.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="suggest" className="py-24 bg-sand-dark scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-7 h-7 text-accent" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {t("suggest.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            {t("suggest.subtitle1")}
            <br />
            {t("suggest.subtitle2")}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("suggest.nameLabel")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("suggest.namePlaceholder")} {...field} />
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
                    <FormLabel>{t("suggest.emailLabel")}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t("suggest.emailPlaceholder")} {...field} />
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
                    <FormLabel>{t("suggest.groupNameLabel")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("suggest.groupNamePlaceholder")} {...field} />
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
                    <FormLabel>{t("suggest.linkLabel")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("suggest.linkPlaceholder")} {...field} />
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
                    <FormLabel>{t("suggest.noteLabel")}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t("suggest.notePlaceholder")}
                        className="min-h-[100px] resize-none"
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
                      <span>{t("suggest.captchaLabel")} {question}?</span>
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
                        placeholder={t("suggest.namePlaceholder") === "张三" ? "你的答案" : "Your answer"}
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
                className="w-full font-display font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("suggest.submitting")}
                  </>
                ) : (
                  t("suggest.submitButton")
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
