import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./assets/theme/theme.ts";
import Login from "./routes/auth"

function App() {
  const router = createBrowserRouter([
      {
          path: '/',
          element: <div>login</div>
      },
      {
          path: '/auth',
          element: <Login/>
      }
  ])
    return (
            <ChakraProvider theme={theme}>
                <RouterProvider router={router}/>
            </ChakraProvider>
    )
}

export default App
