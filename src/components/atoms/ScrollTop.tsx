import React, { useEffect, useState } from "react";
import Image from 'next/image';

const ScrollTop = () => {
    const [showGif, setShowGif] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setShowGif(true);
            } else {
                setShowGif(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div>
            {showGif && (
                <div className="fixed bottom-8 right-8 z-50 cursor-pointer " onClick={scrollToTop}>
                    <Image
                        src="/images/top4.gif"
                        alt="Scroll to top"
                        width={120} 
                        height={70}
                    />
                </div>
            )}
        </div>
    )
}

export default ScrollTop