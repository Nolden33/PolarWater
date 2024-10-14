import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to the top of the page whenever the route changes
    window.scrollTo({ top: 0, left: 0, });
  }, [pathname]);

  return null;
}

export default ScrollToTop;