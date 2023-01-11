import { useContext } from "react";
import appContext from "../context/appContext";

function LoginHeader() {

  const { 
    username, 
    setUserName, 
    password, 
    setPassword 
  } = useContext(appContext);

  const handleChange = ({target}) => {
    if (target.name === "fieldUser") {
      setUserName(target.value);
      console.log(username);
    } else {
      setPassword(target.value);
      console.log(password);
    }
  };


  return(
  <div className="flex flex-wrap justify-center md:justify-between h-24 w-full pt-5">
    <img 
      className="md:mt-0 mt-20 ml-5 h-8 w-80" 
      src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png" 
      alt="logo" 
    />
    <div className="mt-44 md:m-0 text-center md:justify-between">
      <input 
        name="fieldUser" 
        onChange={handleChange} 
        className="h-8 pl-3 mr-0 md:mr-4 mb-5 rounded-2xl" 
        type="text" 
        placeholder="username"
      />
      <input 
        name="fieldPassword" 
        onChange={handleChange} 
        className="h-8 pl-3 mr-0 md:mr-4 rounded-2xl" 
        type="password" 
        placeholder="password"
      />
      <div className="md:flex block">
        <button 
          className="bg-blue-800 md:bg-neutral-500 p-1 px-2 my-16 md:my-0 md:mr-3 flex md:block ml-auto mr-auto rounded-2xl"> 
          Entrar 
        </button>
        <button 
          className="bg-blue-800 md:bg-neutral-500 p-1 px-2 my-16 md:my-0 mr-4 rounded-2xl"> 
          Remember me
        </button>
      </div>
    </div>
  </div>
  );
}

export default LoginHeader;
