'use client'

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen  font-sans">
      <main className="h-auto w-full">
        <div className="h-auto w-full bg-[#0f0715] overflow-hidden relative">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#8750f7] opacity-20 blur-[130px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[30%] w-[500px] h-[500px] bg-[#2a1454] opacity-30 blur-[110px] rounded-full"></div>

          <Navbar />
          <Hero />
        </div>

      </main>
    </div>
  );
}
