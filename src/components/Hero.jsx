import React from 'react'
import Picture from '../../public/images/picture.png';
import HeroImage from '../../public/images/hassan.jpeg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-auto w-full box-border overflow-hidden text-white font-sans flex items-center justify-center px-6 md:px-10 lg:px-10 xl:px-20 py-20 pt-35">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-center relative z-10">

        {/* Left Side*/}
        <div className="space-y-4 flex-1 max-w-[600px]">
          <h3 className="text-2xl max-sm:text-center md:text-3xl font-bold tracking-tight">I am Hassan Ali</h3>
          <h1 className="text-[2em] max-sm:text-center md:text-3xl lg:text-5xl xl:text-7xl font-extrabold leading-tight tracking-tighter bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">
            MERN Stack Developer
          </h1>
          <p className="text-gray-400 max-sm:text-center text-lg md:text-xl max-w-md leading-relaxed">
            MERN Stack developer focused on building modern, responsive, and scalable web applications. I have a hands-on, project-driven learning mindset with practical experience building real-world apps using MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex max-lg:flex-col max-sm:items-center items-start  lg:items-center gap-6 pt-4">
            <a href='./files/Hassan_Ali.pdf' target='_blank' className="px-8 py-3 border-2 border-[#8750f7] text-[#8750f7] rounded-full font-bold cursor-pointer hover:bg-[#8750f7] hover:text-white transition-all duration-300 flex items-center gap-2">
              Download CV <span className="text-lg">↓</span>
            </a>

            <div className="flex gap-3">
              <a href="https://github.com/mrhassanali667" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile" className="group w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] cursor-pointer transition-all"><svg
                className="w-6 h-6 text-[#8750f7] group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/mrhassanali667/" target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile" className="group w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] cursor-pointer transition-all">
                <svg
                  className="w-6 h-6 text-[#8750f7] group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>

              </a>
              <a href="https://www.facebook.com/profile.php?id=61559818206492" target="_blank" rel="noreferrer" aria-label="Visit my Facebook profile" className="group w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] cursor-pointer transition-all">
                <svg
                  className="w-6 h-6 text-[#8750f7] group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>


              </a>
              <a href="https://wa.me/923193588038?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20opportunity." target="_blank" rel="noreferrer" aria-label="Contact me on WhatsApp" className="group w-10 h-10 border border-[#8750f7] rounded-full flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] cursor-pointer transition-all">
                <svg
                  className="w-6 h-6 text-[#8750f7] group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>

              </a>
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className="relative flex justify-center flex-1 max-w-[600px]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#2a1454] to-[#8750f7] rounded-[30px] rotate-4 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative max-h-[470px] max-w-[400px] lg:max-h-[470px] lg:max-w-[500px] bg-[#0f0715] rounded-[30px] overflow-hidden  rotate-4 border-transparent w-[300px] h-[380px] md:w-[400px] md:h-[500px] group-hover:rotate-0 transition-transform duration-500">
              <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" placeholder='blur' blurDataURL={HeroImage.blurDataURL} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero