import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appStore from './utils/appStore';
import Login from './Components/Login';
import Browse from './Components/Browse';
import Body from './Components/Body';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/browser',
    element: <Browse />
  }
]);

function App() {
  return (
    <Provider store={appStore}>
      <Body /> {/* Manages user auth listener */}
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
