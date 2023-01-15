import './App.css';
import Login from "./containers/Login";
import CreateActivity from './containers/CreateActivity';
import { useRoutes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from './containers/Activity';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/createActivity",
      element: <CreateActivity />
    },
    {
      path: "/activity",
      element: <Activity />
    }
  ]);
  return routes;
}

export default App;
