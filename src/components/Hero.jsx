import React from 'react'

const Hero = () => {
    return (
        <section class="relative min-h-screen w-full bg-[#0f0715] overflow-hidden text-white font-sans flex items-center justify-center px-6 md:px-20">
  
  <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8750f7] opacity-20 blur-[120px] rounded-full"></div>
  <div class="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#2a1454] opacity-30 blur-[100px] rounded-full"></div>

  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
    
    <div class="space-y-6">
      <h3 class="text-2xl md:text-3xl font-bold tracking-tight">I am Gerold</h3>
      <h1 class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">
        Web Developer +<br/>UX Designer
      </h1>
      <p class="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
        I break down complex user experience problems to create integrity focussed solutions that connect billions of people
      </p>
      
      <div class="flex items-center gap-6 pt-4">
        <button class="px-8 py-3 border-2 border-[#8750f7] text-[#8750f7] rounded-full font-bold hover:bg-[#8750f7] hover:text-white transition-all duration-300 flex items-center gap-2">
          Download CV <span class="text-lg">↓</span>
        </button>
        
        <div class="flex gap-3">
          <div class="w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white cursor-pointer transition-all">f</div>
          <div class="w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white cursor-pointer transition-all">in</div>
        </div>
      </div>
    </div>

    <div class="relative flex justify-center lg:justify-end">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-b from-[#2a1454] to-[#8750f7] rounded-[30px] rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
        
        <div class="relative bg-[#0f0715] rounded-[30px] overflow-hidden border-2 border-transparent w-[300px] h-[380px] md:w-[400px] md:h-[500px]">
          <img 
            src="APKI_IMAGE_URL" 
            alt="Gerold" 
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>

  </div>
</section>
    )
}

export default Hero