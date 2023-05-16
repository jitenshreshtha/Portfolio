import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        
      </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
