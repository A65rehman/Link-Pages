import './index.css';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to handle splash screen visibility

  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the splash screen after the delay
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isLoading ? <SplashScreen /> : <LoginScreen />}
    </>
  );
}

export default App;
