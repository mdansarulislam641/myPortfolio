
import './App.css'
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes";
function App() {
  return (
  <div>
    <RouterProvider router={router}>
    </RouterProvider>
      <Toaster></Toaster>
     
  </div>
  );
}

export default App;
