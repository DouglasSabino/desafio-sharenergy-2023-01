import HomeHeader from '../components/HomeHeader';
import RegisterClient from "../components/RegisterClient";
import ClientsList from "../components/ClientsList";
import Loading from "../components/Loading";
import { useContext } from "react";
import appContext from "../context/appContext";

function Clients() {
  const { clients, loading } = useContext(appContext);

  return (
    <div className='md:h-screen md:w-full bg-sky-500/50'>
      <HomeHeader />
      <div className='flex'>
        <RegisterClient />
       {
        loading ? (
        <div className='ml-auto mr-auto mt-40'>
          <Loading />
        </div>  
        ) : clients.length === 0 ? (
          <div className='font-roboto text-2xl ml-auto mr-auto mt-40'>
            <h1>Ainda não há clientes Cadastrados</h1>
          </div>
        ) : (
          <div>
            <ClientsList />
          </div>
        )
       }
      </div>
    </div>
  );
}

export default Clients;