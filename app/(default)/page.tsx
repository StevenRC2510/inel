export const metadata = {
  title: "Inel educación en ingeniería",
  description: "La mejor opción para tu crecimiento profesional",
};

import Hero from "@/components/hero";
import Banner from "@/components/shared/banner";
import PageIllustration from "@/components/pageIllustration";
import CompanyHighlights from "@/components/companyHighlights";
import CorporateEducationSection from "@/components/corporateEducationSection";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <CorporateEducationSection />
      <CompanyHighlights />
      <Banner />
    </>
  );
}
