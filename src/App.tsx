import Routes from './routes'
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  const queryClient = new QueryClient();


  return (
    <>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes/>
      </QueryClientProvider>
    </AuthContextProvider>
    </>
  )
}

export default App
