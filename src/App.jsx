import "./App.css";
import RootLayout from "./components/RootLayout";
import Error from "./components/Error";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Articles from "./components/Articles";
import { createBrowserRouter, RouterProvider } from "react-router";

const browserRouterObj = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },
        { path: "articles", element: <Articles /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
function App() {
  return <RouterProvider router={browserRouterObj} />;
}

export default App;
