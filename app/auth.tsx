import { useAuth } from "@/context/AuthContext";

 function useAuthSession() {
  const { user, loading } = useAuth();

  return {
    status: loading ? "loading" : user ? "authenticated" : "unauthenticated",
    user,
  };
}

export default useAuthSession