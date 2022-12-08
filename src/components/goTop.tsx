import React, { useEffect, useState, useRef } from "react";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
const GoTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    

    return (
        <div className="top-to-btm">
            
            {showTopBtn && (
                <Fab size="small" color="primary"  aria-label="add"  onClick={goToTop}>
                <ArrowUpwardIcon color="inherit"/>
              </Fab>
        // <ArrowCircleUpIcon fontSize="large" className="icon-position icon-style"
        // onClick={goToTop}/>
        )}
    </div>
    );
  };
  export default GoTop;