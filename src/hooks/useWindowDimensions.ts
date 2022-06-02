import { useState, useEffect } from 'react';


export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width:0});

  useEffect(() => {
    function getWindowDimensions(){
      const { innerWidth: width} = window;
      return {
        width
      };
    }
    setWindowDimensions(getWindowDimensions())
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}