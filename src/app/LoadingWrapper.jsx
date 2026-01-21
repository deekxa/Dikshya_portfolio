'use client';

import { useEffect, useState } from 'react';
import Loading from './loading';
import GreetingPage from './GreetingPage';

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    // Show loading for ~6 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowGreeting(true);
    }, 6000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleGreetingComplete = () => {
    setShowGreeting(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (showGreeting) {
    return <GreetingPage onComplete={handleGreetingComplete} />;
  }

  return <>{children}</>;
}
