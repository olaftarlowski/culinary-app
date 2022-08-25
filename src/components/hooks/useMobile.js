import { useEffect, useState } from "react";

const useMobile = () => {
  const [width, setSize] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isMobile;
};

export default useMobile;
