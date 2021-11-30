import { useState } from "react"
import { AuthContext } from "../context/context"
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const AuthProvider = ( { children } ) => {
    const [ auth, setAuth ] = useState( null )
    return <AuthContext.Provider value={ {
        auth,
        setAuth
    } }>
        { children }
    </AuthContext.Provider>
}

// Create a client
const queryClient = new QueryClient()

export const QueryProvider = ( { children } ) => {
    return <QueryClientProvider client={ queryClient }>
        { children }
        <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
}