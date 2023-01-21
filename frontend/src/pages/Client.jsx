import HomeHeader from '../components/HomeHeader';
import { useContext, useEffect } from "react";
import appContext from "../context/appContext";

function Clients() {
  const { client, setClient } = useContext(appContext);

  useEffect(() => {
    const localStorageSting = localStorage.getItem('client');
    const clientObj = JSON.parse(localStorageSting);
    setClient(clientObj);
  }, []);

  return (
    <div className="md:h-screen md:w-full bg-sky-500/50">
      <HomeHeader />
      <div className='text-center mt-5 text-[60px] font-roboto'>
        <h1>{client.nome}</h1>
      </div>
      <div className="border border-black ml-auto mr-auto pt-6 mt-20 
            shadow-lg shadow-black h-[30vh] w-[40rem] 
            md:bg-[#54A3A2] rounded-2xl shadow-2xl shadow-black"
      >
        <div className='font-roboto text-center text-2xl mt-5'>{client.email}</div>
        <div className='font-roboto text-center text-2xl mt-5'>{client.telefone}</div>
        <div className='font-roboto text-center text-2xl mt-5'>{client.endereco}</div>
        <div className='font-roboto text-center text-2xl mt-5'>{client.CPF}</div>
      </div>
    </div>
  )
}

export default Clients;