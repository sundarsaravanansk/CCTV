import AboutSection from "@/Components/AboutSection/AboutSection";
import FAQ from "@/Components/FAQ/FAQ";
import IntroSection from "@/Components/IntroSection/IntroSection";
import Product from "@/Components/Product/Product";
import Security from "@/Components/Security/Security";
import Footer from "@/Footer/Footer";



export default function Home() {
  return (
  <>
  <IntroSection/>
  <AboutSection/>
  <Security/>
  <Product/>
  <FAQ/>
  <Footer/>
  </>
  );
}
