import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homes from "./pages/home";
import CatalogPage from "./pages/Catalog";
import BookPage from "./pages/books";
import Auths from "./pages/Auth"
import MyPageBook from "./pages/cartBookUser";


export default function Routes() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Homes />
    },
    {
      path: "/catalog",
      element: <CatalogPage />
    },
    {
      path: "/catalog/search",
      element: <CatalogPage />
    },
    {
      path: "/book/:id",
      element: <BookPage />
    },
    {
      path: "/auth",
      element: <Auths />
    },
    {
      path:"/my_books",
      element:<MyPageBook/>
    }
  ])

  return <RouterProvider router={route} />
}
