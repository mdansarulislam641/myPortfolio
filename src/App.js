import Home from "./Components/Home";
import './App.css'
import { Toaster } from "react-hot-toast";
function App() {
  return (
  <div className=" gradiant">
      <div className="">
      <Home></Home>
      <Toaster></Toaster>
    </div>
  </div>
  );
}

export default App;
