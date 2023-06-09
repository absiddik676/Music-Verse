import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';



const BouncingMusicNode = ({img,translateY1,translateY2}) => {
    const musicNodeRef = useRef(null);
    const animationTimeoutRef = useRef(null);
  
    useEffect(() => {
      const musicNode = musicNodeRef.current;
      let animation = null;
  
      const animateBounce = () => {
        animation = anime({
          targets: musicNode,
          translateY: [translateY1, translateY2], // TranslateY values for the bounce animation
          duration: 500, // Duration of the animation in milliseconds
          easing: 'easeInOutSine', // Easing function for the animation
          direction: 'alternate', // Bounce back and forth
          loop: false, // Repeat the animation indefinitely
        });
      };
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
          clearTimeout(animationTimeoutRef.current);
          animateBounce();
          animationTimeoutRef.current = setTimeout(() => {
            animation.pause();
          }, 5000); // Pause the animation after 5 seconds
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        clearTimeout(animationTimeoutRef.current);
        animation?.pause();
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <img
        className="music-node-image"
        ref={musicNodeRef}
        src={img}
        alt="Music Node"
      />
    );
  };


export default BouncingMusicNode
