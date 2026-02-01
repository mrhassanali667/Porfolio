import React from 'react'
import Picture from '../../public/images/picture.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white font-sans flex items-center justify-center px-6 md:px-10 lg:px-10 xl:px-20 ">
      {/* Grid ki jagah Flex use kiya gaya hai */}
      <div className="container mx-auto flex flex-col md:flex-row gap-5 items-center relative z-10">

        {/* Left Side: Content (Flex Item) */}
        <div className="space-y-4 flex-1">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">I am Gerold</h3>
          <h1 className="text-[1em] md:text-3xl lg:text-5xl xl:text-7xl font-extrabold leading-tight tracking-tighter bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">
            Web Developer +<br />UX Designer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            I break down complex user experience problems to create integrity focussed solutions that connect billions of people
          </p>

          <div className="flex max-lg:flex-col items-start lg:items-center gap-6 pt-4">
            <a href='./files/Muhammad_Raza_CV[1].pdf' target='_blank' className="px-8 py-3 border-2 border-[#8750f7] text-[#8750f7] rounded-full font-bold cursor-pointer hover:bg-[#8750f7] hover:text-white transition-all duration-300 flex items-center gap-2">
              Download CV <span className="text-lg">↓</span>
            </a>

            <div className="flex gap-3">
              <div className="w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white cursor-pointer transition-all">f</div>
              <div className="w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white cursor-pointer transition-all">in</div>
              <div className="w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white cursor-pointer transition-all">G</div>
              <div className="w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white cursor-pointer transition-all">in</div>
            </div>
          </div>
        </div>

        {/* Right Side: Image (Flex Item) */}
        <div className="relative flex justify-center flex-1">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#2a1454] to-[#8750f7] rounded-[30px] rotate-4 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative max-h-[400px] max-w-[450px] lg:max-h-[450px] lg:max-w-[500px] bg-[#0f0715] rounded-[30px] overflow-hidden border-2 rotate-4 border-transparent w-[300px] h-[380px] md:w-[400px] md:h-[500px] group-hover:rotate-0 transition-transform duration-500">
              <Image src={Picture} alt="Hero Image" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero