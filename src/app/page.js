import BuildFaster from "@/components/BuildFaster";
import CreateProject from "@/components/CreateProject";
import Engineered from "@/components/Engineered";
import Footer from "@/components/Footer";
import FromRedline from "@/components/FromRedline";
import Header from "@/components/Header";
import OurProjectImage from "@/components/OurProjectImage";
import PricingSecion from "@/components/PricingSecion";
import QNASection from "@/components/QNASection";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import PricingCard from "@/components/ui/PricingCard/PricingCard";


export default function Home() {
  return (
    <div className="bg-[#E2E2E2]">
      <div className='bg-[#4D8FF3]'>
        <Header />
        <FromRedline />
        <OurProjectImage />
        <div className="">
          <Steps />
        </div>
      </div>

      <div className=" ">
        <Engineered />
      </div>
      <PricingSecion />
      <Testimonials />
      <QNASection />
      <BuildFaster />
      <Footer />
    </div>
  );
}
