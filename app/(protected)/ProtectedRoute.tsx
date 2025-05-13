import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import Loading from '../../components/Loading'; // optional

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/LoginScreen');
    }
  }, [user, loading]);

  if (loading || !user) {
    return <Loading />; // or return null
  }

  return <>{children}</>;
}
