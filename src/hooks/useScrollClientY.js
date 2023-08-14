import { useState, useEffect } from 'react';

const useScrollClientY = () => {
  const [scrollClientY, setScrollClientY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollClientY(window.scrollY + window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when the component using the hook mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once

  return scrollClientY;
};

export default useScrollClientY;
