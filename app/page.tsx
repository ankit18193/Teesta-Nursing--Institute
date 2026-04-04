import Hero from "@/components/sections/Hero";
import InstitutesSection from "@/components/sections/InstitutesSection"
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Accreditation from "@/components/sections/Accreditation";
import AdmissionQuery from "@/components/sections/AdmissionQuery";
import Testimonials from "@/components/sections/Testimonials";
import NoticeStrip from "@/components/sections/NoticeStrip";
import Hospitals from "@/components/sections/Hospitals";

export default function Home() {
  return (
    <>
      <Hero />
      <InstitutesSection />
      <NoticeStrip/>
      <AboutSection/>
      <WhyChooseUs/>
      <Accreditation/>
      <Hospitals/>
      <AdmissionQuery/>
      <Testimonials/>
      

    </>
  );
}