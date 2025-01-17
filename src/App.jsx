import CaseStudies from "./Components/Case Studies/CaseStudies";
import ContactUs from "./Components/Contact US/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import OurWorkingProcess from "./Components/Our Working Process/OurWorkingProcess";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
import Testimonials from "./Components/Testimonials/Testimonials";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
