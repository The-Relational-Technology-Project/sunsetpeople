import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HowToMakeFriends } from "@/components/HowToMakeFriends";
import { LocalGroups } from "@/components/LocalGroups";
import { MoreFun } from "@/components/MoreFun";
import { SuggestGroupForm } from "@/components/SuggestGroupForm";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <Hero />
        <HowToMakeFriends />
        <LocalGroups />
        <MoreFun />
        <SuggestGroupForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
