import HomeHeader from '../components/HomeHeader';
import { useContext, useEffect } from "react";
import appContext from "../context/appContext";

function Clients() {
  const {  } = useContext(appContext);

  useEffect(() => async () => {
   
  }, []);


  return (
    <div className='md:h-screen md:w-full bg-sky-500/50'>
      <HomeHeader />
      <div className="border border-black ml-auto mt-16 pt-5 pb-50 shadow-lg shadow-black mr-auto h-[80vh] mt-3 w-[100rem] md:bg-[#54A3A2] rounded-2xl">
        
      </div>
    </div>
  );
}

export default Clients;