import HomeHeader from '../components/HomeHeader';
import RegisterClient from "../components/RegisterClient";
import ClientsList from "../components/ClientsList";
import Loading from "../components/Loading";
import { useContext } from "react";
import appContext from "../context/appContext";

function Clients() {
  const { loading } = useContext(appContext);
  return (
    <div className='md:h-screen md:w-full bg-sky-500/50'>
      <HomeHeader />
      <div className='flex'>
        <RegisterClient />
       {
        loading ? (<Loading />) : (
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