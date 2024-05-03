import "./App.css";
import HotelBookingForm from "./components/HotelBookingForm";
import GetData from "./components/Getdata";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<HotelBookingForm/>
    },{
      path:'/getdata',
      element:<GetData/>
    }
  ])
  return (
    
      <div className="App">
       <RouterProvider router={appRouter}/>
      </div>
  );
}

export default App;
