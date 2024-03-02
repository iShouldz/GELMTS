import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './pages/Root/Root';

function App() {

  const router = createBrowserRouter([
   {
    path: '/',
    element: <Root />,
    children: [
      
    ]
   }
  ]);

  return <RouterProvider router={router} />
}

export default App
