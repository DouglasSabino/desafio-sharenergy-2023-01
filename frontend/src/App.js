import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RandomDog from "./pages/RandomDog";
import HttpCat from "./pages/HttpCat";
import Clients from "./pages/Clients";
import ContextProvider from "./context/contextProvider";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="random-dog" element={<RandomDog />}/>
            <Route path="http-cat" element={<HttpCat />} />
            <Route path="clients" element={<Clients />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
      </ContextProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
