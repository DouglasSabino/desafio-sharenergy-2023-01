import Login from "./pages/Login";
import ContextProvider from "./context/contextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <Login />
      </ContextProvider>
    </div>
  );
}

export default App;
