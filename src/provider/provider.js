import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from "../context/context";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  return (
    <AuthContext
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext>
  );
};
