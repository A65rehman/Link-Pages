import React from 'react';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Main logo container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo text */}
        <h1 className="text-5xl font-bold text-blue-600 tracking-tight animate-pulse">
          Linked
          <span className="bg-blue-700 text-white rounded-md px-2 py-0 ml-1">in</span>
        </h1>
        
        {/* Animated loading bar */}
        <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-loading-bar" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;