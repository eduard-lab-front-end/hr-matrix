import { useEffect, useState } from "react";

const getWindowWidth = () => {
  return window.innerWidth;
};

const useIsMobileScreenSize = (mobileWidthThreshold) => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);
  const isScreenMobileWidth =
    windowWidth <= mobileWidthThreshold ? true : false;

  return isScreenMobileWidth;
};

export default useIsMobileScreenSize;
