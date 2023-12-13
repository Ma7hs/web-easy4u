// ProtectedRoute.tsx
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/index";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  }, [token, router]);

  return token ? <>{children}</> : null;
};

export default ProtectedRoute;
