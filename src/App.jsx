import "./App.css";
import RootLayout from "./components/RootLayout";
import Error from "./components/Error";
import Home from "./components/Home";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router";

const browserRouterObj = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "issue-report", element: <IssueReport /> },
        { path: "issue-track", element: <IssueTracking /> },
        { path: "admin", element: <Admin /> },
        { path: "citizen", element: <Citizen /> },
        { path: "municipal", element: <Municipal /> },
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
