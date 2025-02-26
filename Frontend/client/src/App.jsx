import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Services from "./pages/Services"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import EmailVerification from "./pages/EmailVerification"
import Accordion from "./pages/Accordion"
import PacketCapture from "./pages/packetCapture"
import CsvAnalyzer from "./pages/CsvAnalyzer"

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:'/FAQ',
        element:<Accordion/>
      }
      
]}
,     {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/PacketCapture",
        element:<PacketCapture/>
      },
      
      {
        path:"/csv_analyzer",
        element:<CsvAnalyzer/>
      },
      {
        path:"/register",
        element: <Register/>,
      },
      {
        path:"/services",
        element: <Services/>
      },
      {
        path:"/verify-email",
        element: <EmailVerification/>
      }

])



const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter}>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </RouterProvider>
    </main>
  )
}

export default App
