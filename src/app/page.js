'use client'

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen  font-sans bg-black">
      <main className="h-auto w-full">
        <div className="h-auto w-full bg-[#0f0715] bg-[linear-gradient(260deg,rgba(115,67,210,0.2)_0%,rgba(115,67,210,0)_100%)]">
          <Navbar />
          <Hero />
        </div>

      </main>
    </div>
  );
}
