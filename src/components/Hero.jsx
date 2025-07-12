import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const trigRef = useRef();
  const trigRefTwo = useRef();

  useEffect(() => {
    // Animate first heading to the left
    gsap.to(trigRef.current, {
      x: -500,
      scrollTrigger: {
        trigger: trigRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animate second heading to the right
    gsap.to(trigRefTwo.current, {
      x: 500,
      scrollTrigger: {
        trigger: trigRefTwo.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-10 overflow-hidden"
    >
      <h1
        ref={trigRef}
        className="text-9xl font-light whitespace-nowrap"
      >
        Arya Arya Arya Arya Arya Arya Arya Arya Arya Arya Arya
      </h1>
      <h1
        ref={trigRefTwo}
        className="text-9xl font-bold whitespace-nowrap"
      >
        Shrestha Shrestha Shrestha Shrestha Shrestha Shrestha
      </h1>
    </section>
  );
};

export default Hero;
