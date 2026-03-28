'use client';

import { useEffect, useState } from 'react';
import Loading from './loading';

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for ~6 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
