import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Reports from './components/Reports';
import Courses from './components/Courses';
import Mock_test from './components/Mock_test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
    </div>,
  },

  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>,
  },

  {
    path: "/dashboard",
    element: <div>
      <Navbar />
      <Dashboard />
    </div>,
    children: [ 
      { 
        path: "reports",
        element: <div>
         
          <Reports />
        </div>
      },
      { 
        path: "courses",
        element: <div>
    
          <Courses />
        </div>
      },
      { 
        path: "mock-test",
        element: <div>
        
          <Mock_test />
        </div>
      },
    ] 
  },
  {
    path: "*",
    element: <div>
      <h1> 404 Not Found </h1>
    </div>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;