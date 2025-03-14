import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Calculate current scroll position
          const currentScrollPosition = window.pageYOffset;
          
          // Set scroll position
          setScrollPosition(currentScrollPosition);
          
          // Determine scroll direction
          if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
            setScrollDirection('down');
          } else if (currentScrollPosition < lastScrollPosition) {
            setScrollDirection('up');
          } else {
            setScrollDirection('none');
          }
          
          // Update last scroll position
          setLastScrollPosition(currentScrollPosition);
          
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  return { scrollPosition, scrollDirection };
}

export default useScrollPosition;