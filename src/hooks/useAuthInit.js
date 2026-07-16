import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { useAuth } from "./useAuth";
import { tokenService } from "../utils/token";

export function useAuthInit() {
  const { setUser, setIsAuthReady } = useAuth();

  useEffect(() => {
    const token = tokenService.get();

    if (!token) {
      setIsAuthReady(true);
      return;
    }

    try {
      const user = jwtDecode(token);

      setUser(user);
    } catch (error) {
      tokenService.remove();
      setUser(null);
    } finally {
      setIsAuthReady(true);
    }
  }, [setUser, setIsAuthReady]);
}
