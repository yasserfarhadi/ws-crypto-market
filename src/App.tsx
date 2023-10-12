import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ReduxProvider } from './redux/store';
import WSProvider from './context/WS';

const App = () => {
  return (
    <ReduxProvider>
      <WSProvider>
        <RouterProvider router={router} />
      </WSProvider>
    </ReduxProvider>
  );
};

export default App;
