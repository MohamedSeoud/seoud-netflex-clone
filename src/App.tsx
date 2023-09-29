import Routes from './routes'
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const queryClient = new QueryClient();


  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Routes/>
    </QueryClientProvider>
    </>
  )
}

export default App
