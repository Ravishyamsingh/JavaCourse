import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();
  const hasInitialized = useRef(false);

  useLayoutEffect(() => {
    if (!hasInitialized.current && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      hasInitialized.current = true;
    }

    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceScrollTop();
    const rafId = window.requestAnimationFrame(forceScrollTop);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);
};

export default useScrollToTop;