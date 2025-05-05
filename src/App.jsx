import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"

export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    }
  ])
  return <RouterProvider router={routes}/>
}
