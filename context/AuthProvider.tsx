import { useSegments, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string;
  // Tambahkan properti lain jika diperlukan
}

type AuthType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void; // Tambahkan fungsi logout jika diperlukan
}

const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => {},
  logout: () => {}, // Fungsi logout awalnya kosong
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: User | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/login");
    } else if (user && inAuthGroup) {
      router.replace("/home");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  useProtectedRoute(user);

  // Fungsi untuk logout
  const logout = () => {
    // Lakukan pembersihan token atau state lain yang relevan
    setUser(null);
    // Lakukan navigasi ke halaman login setelah logout
    useRouter().replace("/login");
  };

  const authContext: AuthType = {
    user,
    setUser,
    logout, // Masukkan fungsi logout ke dalam context
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
