import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainProvider } from './providers/MainProvider';
import Routes from './routes/Routes';
import './styles/global.css';
import './styles/tailwind.css';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Suspense fallback={<div className='flex items-center justify-center min-h-screen text-2xl text-white bg-gray-900'>Loading...</div>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </MainProvider >
  );
}

export default App;
