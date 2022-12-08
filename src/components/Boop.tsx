import React from "react";
import { animated } from "react-spring";
import useBoop from "./useMove";
import { useSpring } from 'react-spring';

const Boop = ({ 
  children, x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  
  springConfig = {
    tension: 300,
    friction: 10,
  } }) => {

    

    const [isBooped, setIsBooped] = React.useState(true);
    const style = useSpring({
      // width:'100%',
      transform: isBooped
        ? `translate(${x}px, ${y}px)
           rotate(${rotation}deg)
           scale(${scale})`
        : `translate(0px, 0px)
           rotate(0deg)
           scale(1)`,
      config: springConfig,
    });

    React.useEffect(() => {
     
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped]);

    const trigger = React.useCallback(() => {
      setIsBooped(true);
      // alert('dasd')
    }, []);

  return (
    // <div >
    <animated.span 
    onMouseEnter={trigger} 
    style={style}>
      {children}
    </animated.span>
    // </div>
  );
};

export default Boop;
