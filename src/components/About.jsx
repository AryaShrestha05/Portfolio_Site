const About = () => {
  return (
    <section id="aboutme" className="py-20 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">

        {/* Left: Profile Info — spans 2 of 5 columns */}
        <div id="pfp" className="bg-black/60 border-1 border-gray-900 rounded-3xl p-6 md:col-span-2 flex flex-col justify-between">
          <div className="flex flex-col items-center"
          >
            <a href="#hero">
              <img 
                src="/src/assets/photos/cartoonpfp2.png" 
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg shadow-gray-600 opacity-80"
              />
            </a>
            <h2 className="text-3xl font-bold text-white mb-2">Who am I?</h2>
            <p className="text-white text-center leading-relaxed">
              I'm Arya, a full-stack developer driven by a deep interest in how software, data, and intelligent systems shape the world around us. My work sits at the intersection of engineering and curiosity. Whether it's building clean, scalable tools or exploring how machine learning can turn insight into action.
            </p>
          </div>
        </div>

        {/* Right: Detailed About Section — spans 3 of 5 columns */}
        <div id="aboutMe" className="bg-black/60 rounded-2xl p-6 shadow-lg md:col-span-3 flex flex-col justify-center border-1 border-gray-900">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-black text-base leading-relaxed">
            I’m a passionate frontend developer who loves crafting intuitive, aesthetic digital experiences. Currently diving into animation frameworks like GSAP and experimenting with modern UI/UX tools. I enjoy merging creativity with code, and I'm constantly exploring how to bring more life to the web.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
