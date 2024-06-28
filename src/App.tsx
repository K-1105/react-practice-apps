import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';

const App = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/' : '/';

  return (
    <BrowserRouter basename={basename}>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
