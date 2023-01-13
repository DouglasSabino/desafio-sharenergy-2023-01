import Login from "./pages/Login";
import ContextProvider from "./context/contextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <ContextProvider>
        <Login />
      </ContextProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
