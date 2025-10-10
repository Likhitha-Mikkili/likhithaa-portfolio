import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center gradient-bg">
      <div className="text-center space-y-8">
        {/* Animated Logo/Text */}
        <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-pulse">
          L
        </h1>
        
        {/* Loading Bar */}
        <div className="w-64 h-2 bg-muted/30 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-[slideInRight_2s_ease-in-out]" />
        </div>
        
        <p className="text-muted-foreground animate-fadeIn">Loading amazing things...</p>
      </div>
    </div>
  );
};

export default Preloader;
