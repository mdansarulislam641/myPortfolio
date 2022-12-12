import Home from "./Components/Home";
import './App.css'
import { Toaster } from "react-hot-toast";
import ParticalBackground from "./Components/ParticalBackground";
function App() {
  return (
  <div className=" gradiant">
      <div className="">
      <Home></Home>
        <ParticalBackground></ParticalBackground>
      <Toaster></Toaster>
    </div>
  </div>
  );
}

export default App;
