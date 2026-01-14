import { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

export default function SmoothScrollProvider({ children }) {
  const smoother = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
    });
    if (process.env.NODE_ENV !== 'production') console.log('GSAP ScrollSmoother created');
    return () => {
      if (smoother.current && typeof smoother.current.kill === 'function') {
        smoother.current.kill();
        if (process.env.NODE_ENV !== 'production') console.log('GSAP ScrollSmoother destroyed');
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
} 