import { useContext } from "react";
import appContext from "../context/appContext";
import Axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginHeader() {
  const history = useNavigate();
  const {
    setUser,
    username, 
    setUserName, 
    password, 
    setPassword 
  } = useContext(appContext);

  const rememberMeClick = () => {
    const token = localStorage.getItem('token');
    Axios.post('http://localhost:3001/rememberme', {},
     { 
      headers: { 
        "Authorization": `${token}`
      }
     })
     .then((response) => {
        setUser(response.data)
        history('/home');
    }).catch((error) => {
      toast.error(error.response.data.message);
    });
  }

  const handleChange = ({target}) => {
    if (target.name === "fieldUser") {
      setUserName(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const login = () => {
    Axios.post('http://localhost:3001/', {
      username,
      password
    }).then((res) => {
     localStorage.setItem("token", res.data[1]);
     setUser(res.data[0]);
     toast.success(`Olá ${res.data[0].user}, login efetuado com sucesso !!`);
     history("/home");
    }).catch((e) => {
      toast.error(e.response.data.message);
    });
  }


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
        className="h-8 pl-3 mr-0 md:mr-4 mb-5 rounded-2xl font-roboto" 
        type="text" 
        placeholder="username"
      />
      <input 
        name="fieldPassword" 
        onChange={handleChange} 
        className="h-8 pl-3 mr-0 md:mr-4 rounded-2xl font-roboto" 
        type="password" 
        placeholder="password"
      />
      <div className="md:flex block">
        <button
          onClick={login} 
          className="
          font-roboto bg-blue-800 md:bg-neutral-500 
          p-1 px-2 my-16 md:my-0 md:mr-3 flex md:block 
          ml-auto mr-auto rounded-2xl"> 
          Entrar 
        </button>
        <button
          onClick={rememberMeClick} 
          className="font-roboto bg-blue-800 md:bg-neutral-500 
          p-1 px-2 my-16 md:my-0 mr-4 rounded-2xl"
        > 
          Remember me
        </button>
      </div>
    </div>
  </div>
  );
}

export default LoginHeader;
