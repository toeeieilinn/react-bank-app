import React from "react";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Hero from "./components/Hero";
import Bussiness from "./components/Bussiness";
import Bill from "./components/Bill";
import PaymentMethod from "./components/PaymentMethod";
import Testimonials from "./components/Testimonials";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx:auto">
        <Hero />
        <div className="flex flex-wrap flex-row xs:flex-col max-sm:flex-col  items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="3800" title="ACTIVE USER" />
          <Stats number="230" title="TRUSTED BY COMPANY" />
          <Stats number="$230M" title="TRANSACTION" />
        </div>
        <Bussiness />
        <Bill />
        <PaymentMethod />
        <Testimonials />
        <ServiceCard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
