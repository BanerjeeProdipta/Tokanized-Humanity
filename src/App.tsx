import { BrowserRouter } from 'react-router-dom';
import { MainProvider } from './providers/MainProvider';
import Routes from './routes/Routes';
import './styles/global.css';
import './styles/tailwind.css';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
