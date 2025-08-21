import { useAuth } from '@/context/AuthContext';
import { SplashScreen } from 'expo-router';


 function SplashScreenController() {
  const {loading } = useAuth();

  if (!loading) {
    SplashScreen.hideAsync();
  }

  return null;
}

export default SplashScreenController;