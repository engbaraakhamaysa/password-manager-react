// import { createContext, useState } from "react";

// export const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
import { createContext, useMemo, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  // ==========================================================
  // State
  // ==========================================================
  const [user, setUser] = useState(null);

  // ==========================================================
  // Actions
  // ==========================================================
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // ==========================================================
  // Context Value
  // ==========================================================
  const value = useMemo(
    () => ({
      user,
      setUser,
      logout,
    }),
    [user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
