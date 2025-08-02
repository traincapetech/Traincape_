import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout lets layout complete before scroll
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0); // Instant scroll — more stable than smooth
    }, 50); // 50ms is usually enough, can increase to 100ms if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
