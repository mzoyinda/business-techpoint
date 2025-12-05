"use client";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/About";

export default function Home() {
  const handleJoinCommunity = () => {
    window.open("https://businesstechpoint.com", "_blank");
  };

  return (
    <main>
      <Header onJoinCommunity={handleJoinCommunity} />
      <Hero onJoinCommunity={handleJoinCommunity} />
      <About />
      <Benefits onJoinCommunity={handleJoinCommunity} />
      {/* <Services /> */}
      <Footer onJoinCommunity={handleJoinCommunity} />
    </main>
  );
}
