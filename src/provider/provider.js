import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserContext } from "../context/context";

export const QueryProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
